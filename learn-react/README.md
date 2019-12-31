# match
params, url, path, isExact
**创建一个match对象**
path-to-regexp
第三方库，用于字符串正则（路径正则， 路径吗， options）

# history

该对象提供了一些方法，用于控制或监听地址的变化。
该对象*不是*window.history, 而是一个抽离的对象,它提供*统一*的API接口,封装了具体的实现.
  - createBrowserHistory 产生控制浏览器histoty的对象
  - createHashHistory    产生控制浏览器hash的history对象
  - createMemoryHistory  产生控制内存中地址数组的history对象
history共同的特点：维护了一个地址栈

**history**
第三方库，用于产生history对象
名称和参数不同，但返回的对象结构完全一致

history对象
  - action  当前地址栈最后一次操作的类型
    * 如果是通过createXXX新创建的history对象，action固定为*POP*
    * 如果调用了history的push方法，action变为*PUSH*
    * 如果调用了history的replace方法，action变为*REPLACE*
    * 其他情况不会改变action（例如 .go()）
  - push 向当前地址栈指针位置入栈一个地址
  - go  控制当前地址栈指针偏移  如果是0地址不变，*浏览器中会刷新页面*，*负数代表后退*
  - goBack 相当于go(-1)
  - goForward 相当于go(1)
  - replace 替换当前指针位置
  - **listen** 用于监听地址栈指针的变化
    * 接受一个函数作为参数，代表地址变化后要做的事情,返回值为取消监听的函数
      - history.listen((location, action) => { })
      - *参数函数*会接受两个参数，新的地址，和进入新地址的方式（action）
        * location: 当前地址信息
        * action
          - POP: 调用 go, goBack, goForward,（浏览器点击前进后退）
          - PUSH: 调用push
          - REPLACE: 调用repalce 
        * 返回值： 取消监听的函数
  - block 用于设置一个阻塞，页面发生跳转时，会将指定参数传给getUserConfirmation，
    * 参数： 阻塞消息字符串, 或产生消息字符串的函数
    * 返回值：取消block函数

        
*createBrowserHistory* 产生控制浏览器histoty的对象
  配置对象：
    - basename: 设置根路径
    - forceRefresh: 跳转是否强制刷新
    - keyLength: 设置location使用的对象的key的长度
    - getUserConfirmation: 函数， 当调用history.block后，将发生跳转时条用
      * 第一个参数： 从block传来的阻塞消息
      * 第二个参数： 决定是否跳转的函数，该函数的参数，如果为true则跳转
    - createHref: 获得全路径（location不包含基地址）
      * 参数： location
*createHashHistory*    产生控制浏览器hash的history对象
    - hashType: "hashbang" | "noslash" | "slash" #号后的路径格式(#! | #)
    - 没有foreRefresh，因为不需要，其他的一样
    - ini
*createMemoryHistory*  产生控制内存中地址数组的history对象
    - initialEntries: ['/'], // 站内初始值
    - initialIndex: 0, // 站内初始值长度
