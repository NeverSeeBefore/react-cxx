## 解决副作用的 redux 中间件

1. redux-thunk
2. redux-promise

   > 都需要改变 action，影响 action 或者 action 创建函数不在纯净

3. redux-saga

- 建立在 ES6 的生成器基础上，要熟练的使用 saga，必须理解*生成器*，(要理解生成器，需要理解迭代器和迭代协议)



## 迭代

类似遍历
遍历： 集合数据结构，需要从中一次取数数据进行处理
迭代： 按照某种逻辑，依次取出下一个数据进行处理

## 迭代器

如果一个对象具有*next*方法，并且next方法，满足一定的约束，
next方法必须具有两个属性，value（下一个数据），done（是否完成）；

## 迭代器创建函数

返回一个迭代器

## 可迭代协议

可迭代协议用于规范对象的
[Symbol.iterator] 是一个迭代器创建函数

ES6出现for-of循环，循环的对象必须是可迭代的
for-of原理： 调用[Symbol.iterator]生成一个迭代器，不断调用next方法，返回value值
