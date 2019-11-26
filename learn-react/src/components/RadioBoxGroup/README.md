**属性**
1. datas: 一个数组，数组的每一项是一个对象，对应一个多选框
  - 对象具有value和text属性
  - value:多选框的值
  - text:多选框的文本
2. name: 每一个单选框的name属性值
```js
datas = [
  {value: 'football', text: '足球'},
  {value: 'basketball', text: '篮球'},
  {value: 'movie', text: '电影'},
  {value: 'football', text: '音乐'},
  {value: 'football', text: '足球'},
  {value: 'football', text: '其他'}
]
```
3.value: 当前选中的value值
