[NumPy Tutorial](https://www.w3schools.com/python/numpy/default.asp)
## 1
- import
- import as np
- declare arr = np.array([1,2,3,4,5])
- print np's version
## 2 array
- np'array called **ndarray**
- to declare,we can use list[],tuple(),or any **array-like object**
 dimensions of arrays
- 0-D,1-D,2-D,3-D
- `np.array(51)`
- `np.array([1,2,3,4,5])`
- `np.array([ [1,2,3], [4,5,6], [7,8,9] ])`
- `np.array([ [[1,2,3],[4,5,6],[7,8,9]], [[1,2,3],[4,5,6],[7,8,9]] ])`
to check nums of dimensions
- `print(arr.ndim)`
to higher dimensions by yourself
- `arr = np.array([1,2,3,4,5],ndim = 5)`
## 3 array indexing
for 1-D,nothing to say,it's apparent
for 2-D,[0,1] means the first row and the 2nd col,[0] means the 1st row
for 3-D,4-D,...
negative index:it's apparent,-1 represent the last one
## 4 array slicing
standard : `[start:end:step]`
default values:start = 0,end = length of array,step = 1
such as
- `[0:1:1]` means 1st - 2nd elements
- `[: :1]` means 1st - last elements
- `[4:]` means 5th - last elements
- `[:6]` means 1st to 7th elements
- also negative,such as`[-3,-1]`
for 2-D
- `[1,2:4]` means 2nd child array's 3nd - 5nd elements
## 5