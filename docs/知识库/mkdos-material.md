## Require：
* Python
	* pip
* VSCode
* Github account 配置GitHub Pages
## 步骤
### 基本操作
* python创建虚拟环境
	* `python -m venv venv
* 转入虚拟环境
	* `source venv/vin/activate` //For Linux
	* `\venv\Scripts\activate\` //For Windows
* 检查pip版本
	* pip --version
* 安装mkdocs-material
	* pip install mkdocs-material
* 打开VSCode
	* code .
* 在VSCode中打开终端
* 转入虚拟环境
	* `source venv/bin/activate`//For Linux
	* `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`//For Windows
	* `.\venv\Scripts\Activate.ps1`//For Windows
* 创建新站点
	* mkdocs new .
* 编辑`mkdocs.yml`文件
```
site_name: My MkDocs Material Documentation
site_url: https://sitename.example
theme:
  name: material
```
* 本地启动服务
	* `mkdocs serve` 
* 访问
	* [http://localhost:8000](http://localhost:8000)
### 进一步配置
#### 安装[Red Hat VS Code Yam](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)扩展
* 用以防止yaml格式错误导致的bug以及其他用途
* 左下角⚙️->设置->右上角“打开设置(json)”
* 编辑`settings.json`.
* 加入以下：
```
{
...
    "redhat.telemetry.enabled": true,
  "yaml.schemas": {
    "https://squidfunk.github.io/mkdocs-material/schema.json": "mkdocs.yml"
  },
  "yaml.customTags": [
    "!ENV scalar",
    "!ENV sequence",
    "!relative scalar",
    "tag:yaml.org,2002:python/name:material.extensions.emoji.to_svg",
    "tag:yaml.org,2002:python/name:material.extensions.emoji.twemoji",
    "tag:yaml.org,2002:python/name:pymdownx.superfences.fence_code_format"
  ]
}
```
#### 颜色相关
```
site_name: C6H4O2的小站
theme:
  name: material
  palette:
    # Dark Mode
    - scheme: slate
      toggle:
        icon: material/weather-sunny
        name: Dark Mode
      primary: green #主题颜色
      accent: deep purple #强调色
    # Light Mode
    - scheme: default
      toggle:
        icon: material/weather-night
        name: Light Mode
      primary: blue #主题颜色
      accent: deep orange #强调色
```
#### 字体相关
```
theme:
  name: material
---------------------------
  font:
    text: Merriweather Sans
    code: Red Hat Mono
##只能是Google Fonts中的，如果要自定义，查看官方文档
---------------------------
  palette:
```
#### Emoji
```
##最底部加上
markdown_extensions:
  - attr_list
  - pymdownx.emoji:
      emoji_index: !!python/name:material.extensions.emoji.twemoji
      emoji_generator: !!python/name:material.extensions.emoji.to_svg
```
随后在.md文档中使用`:beer:`,`:soccer:`来使用对应emoji表情:beer: :soccer:
#### Logo
	- 在 `docs` 文件夹中，创建一个 `assets` 文件夹。
	- 将 `logo.png` 文件添加到此文件夹
	- 现在将 `mkdocs.yml` 更改为：
```
theme:
  logo: assets/logo.png
```
#### 网站图标
```
theme:
  favicon: assets/favicon.ico
```
更多：[Changing the logo and icons - Material for MkDocs](https://squidfunk.github.io/mkdocs-material/setup/changing-the-logo-and-icons/)
#### 代码块
参考：[Code blocks - Material for MkDocs](https://squidfunk.github.io/mkdocs-material/reference/code-blocks/)
* 启用语法着色（以python为例）
```
##加上
markdown_extensions:
  - pymdownx.highlight:
      anchor_linenums: true
      line_spans: __span
      pygments_lang_class: true
  - pymdownx.inlinehilite
  - pymdownx.snippets
  - pymdownx.superfences
```
* 添加标题
例子：
````
```py title="add_numbers.py" 
# Function to add two numbers
def add_two_numbers(num1, num2):
    return num1 + num2

# Example usage
result = add_two_numbers(5, 3)
print('The sum is:', result)
```
````
效果：
```py title="add_numbers.py" 
# Function to add two numbers
def add_two_numbers(num1, num2):
    return num1 + num2

# Example usage
result = add_two_numbers(5, 3)
print('The sum is:', result)
```
* 添加行号
	* `py linenums=“1”`
	* 也可以从不同的数字开始行号，例如 `py linenums=“5”`

* 高亮显示行
	* `py hl_lines=“2-4”`
#### 内容选项卡
```
##最底部加上
markdown_extensions:
  - pymdownx.superfences
  - pymdownx.tabbed:
      alternate_style: true
```
针对不同选项的内容：
```
### Generic Content

=== "Plain text"

    This is some plain text

=== "Unordered list"

    * First item
    * Second item
    * Third item

=== "Ordered list"

    1. First item
    2. Second item
    3. Third item
```
针对不同语言的代码：
```
### Code Blocks in Content Tabs

=== "Python"

    ```py
    def main():
        print("Hello world!")

    if __name__ == "__main__":
        main()
    ```

=== "JavaScript"

    ```js
    function main() {
        console.log("Hello world!");
    }

    main();
    ```
```
#### 提示
```
##最底部加上
markdown_extensions:
  - admonition
  - pymdownx.details
  - pymdownx.superfences
```

!!! note "示例"
	这是一段测试文本
#### 可折叠提示
??? info "示例"
	这是一段测试文本

更多：
[Admonitions - Material for MkDocs](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#supported-types)
#### 图表
#### 页脚
导航：
```
theme:
  features:
    - navigation.footer
```
社交图标：
```
extra:
  social:
    - icon: simple/youtube
      link: https://youtube.com/@james-willett
    - icon: simple/linkedin
      link: https://linkedin.com/in/willettjames
```
添加版权声明：
```
copyright: Copyright &copy; 2024 James Willett
```
#### 部署在GitHub Pages
根目录创建`.github/workflows/ci.yml` 文件并粘贴示例代码：
```
name: ci
on:
  push:
    branches:
      - master
      - main
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Configure Git Credentials
        run: |
          git config user.name github-actions[bot]
          git config user.email 41898282+github-actions[bot]@users.noreply.github.com
      - uses: actions/setup-python@v5
        with:
          python-version: 3.x
      - run: echo "cache_id=$(date --utc '+%V')" >> $GITHUB_ENV
      - uses: actions/cache@v4
        with:
          key: mkdocs-material-${{ env.cache_id }}
          path: .cache
          restore-keys: |
            mkdocs-material-
      - run: pip install mkdocs-material
      - run: mkdocs gh-deploy --force
```
- 创建全新的 GitHub 存储库
- 将 GitHub 仓库远程与项目代码挂钩（即执行 `git init`，然后按照说明添加远程）
- 将 branch 推送到 GitHub 存储库上的 `main`
- 转到 GitHub 并进入设置并更改**页面**以`从分支部署`，选择 `gh-pages` 分支。
- 将触发一个 GitHub Action，以部署站点
    - 例如 [https://james-willett.github.io/mkdocs-material-tutorial-2024/](https://james-willett.github.io/mkdocs-material-tutorial-2024/)