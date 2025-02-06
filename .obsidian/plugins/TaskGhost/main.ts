import { Plugin, Editor, MarkdownView } from 'obsidian';

interface PluginState {
  isHidden: boolean;
}

export default class TaskHiderPlugin extends Plugin {
  state: PluginState = { isHidden: false };
  private decorationMap = new Map<Editor, any>();

  async onload() {
    this.addCommand({
      id: 'toggle-tasks',
      name: 'Toggle Completed Tasks',
      callback: () => this.toggleTasks(),
      hotkeys: []
    });

    this.addStatusBarItem().setText('Tasks: Show').addClickListener(() => this.toggleTasks());
  }

  toggleTasks() {
    this.state.isHidden = !this.state.isHidden;
    this.updateAllEditors();
    this.updateStatusBar();
  }

  updateStatusBar() {
    const statusBar = this.app.statusBar.containerEl;
    statusBar.empty();
    statusBar.createEl('span', { text: `Tasks: ${this.state.isHidden ? 'Hide' : 'Show'}` });
  }

  updateAllEditors() {
    this.app.workspace.getLeavesOfType('markdown').forEach(leaf => {
      const view = leaf.view as MarkdownView;
      if (view.editor) {
        this.processEditor(view.editor);
      }
    });
  }

  processEditor(editor: Editor) {
    const cm = editor.cm;
    const lineCount = editor.lineCount();
    const ranges = [];
    
    for (let line = 0; line < lineCount; line++) {
      const text = editor.getLine(line);
      if (/^\s*-\s\[x\]/i.test(text)) {
        ranges.push({ line, from: 0, to: text.length });
      }
    }

    if (this.state.isHidden) {
      const decoration = cm.markText(
        { line: 0, ch: 0 },
        { line: lineCount - 1, ch: 0 },
        {
          inclusive: true,
          replacedWith: createHiddenElement(),
          clearOnEnter: true
        }
      );
      this.decorationMap.set(editor, decoration);
    } else {
      const existingDecoration = this.decorationMap.get(editor);
      if (existingDecoration) {
        existingDecoration.clear();
        this.decorationMap.delete(editor);
      }
    }
  }
}

function createHiddenElement(): HTMLElement {
  const el = document.createElement('span');
  el.style.display = 'none';
  return el;
}