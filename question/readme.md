
# [前端知识点汇总](https://zhuanlan.zhihu.com/p/101986056)
[interview](https://www.zhihu.com/search?type=content&q=%E5%89%8D%E7%AB%AF%E5%BA%94%E5%B1%8A%E7%94%9F%E9%9D%A2%E7%BB%8F)
## JavaScript

1. 原始值和引用值类型及区别

js中的原始值包括了null , undefined , boolean , Number , String

引用值类型则是对象Object.Array，Function,Data,RegExp,Error都是特殊的Object对象

### [eg](1-1原始值和引用值类型及区别.js)
### [原始值和引用值类型及区别](https://juejin.cn/post/6844904023967924231)

2. [判断数据类型typeof、instanceof、Object.prototype.toString.call()、constructor](https://juejin.cn/post/6992848107004231687)
[ 判断数据类型](1-2判断数据类型.html)
3. 类数组与数组的区别与转换
[区别](https://juejin.cn/post/6844903927175970829)
[转换](https://juejin.cn/post/6844903631859220493)
4. 数组的常见API
[api](https://juejin.cn/post/7008081968805969950)
5. bind、call、apply的区别

### [help](https://juejin.cn/post/7075603057924374541)

## 6. [new的原理](https://juejin.cn/post/6994000994300330021)

## 7. [如何正确判断this？](https://juejin.cn/post/6844903847844921351)

8. 闭包及其作用
   [help](https://juejin.cn/post/6964579731387711501)
闭包（closure）是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合。
换而言之，闭包让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 中，闭包会随着函数的创建而被同时创建。
   [闭包](https://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)
[How JavaScript works: memory management + how to handle 4 common memory leaks](https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec)
11. 原型和原型链
    原型链就是一个过程，原型是原型链这个过程中的一个单位，贯穿整个原型链。
10. prototype与__proto__的关系与区别
属性  指向原型函数
[example](1-10prototype和__proto__.html)

11. 继承的实现方式及比较

12. 深拷贝与浅拷贝
### [eg](1-12深拷贝与浅拷贝.js)
### [help](https://juejin.cn/post/7072528644739956773)

13. [防抖和节流](https://juejin.cn/post/6844903669389885453)
函数防抖和函数节流都是防止某一时间频繁触发，但是这两兄弟之间的原理却不一样。
函数防抖是某一段时间内只执行一次，而函数节流是间隔时间执行。

14. 作用域和作用域链、执行期上下文

15. DOM常见的操作方式

16. Array.sort()方法与实现机制

17. Ajax的请求过程
    1.建立XMLHttpRequest对象;
    2.设置回调函数;
    3.配置请求信息，(如open,get方法)，使用open方法与服务器建立链接;
    4.向服务器发送数据;
    5.在回调函数中针对不同的响应状态进行处理;

18. JS的垃圾回收机制

19. JS中的String、Array和Math方法

20. addEventListener和onClick()的区别
    [addEventListener和onClick](https://juejin.cn/post/6844904024039227406)
21. new和Object.create的区别
[link](https://github.com/jtwang7/JavaScript-Note/issues/52)
    [example](1-10prototype和__proto__.html)

22. DOM的location对象

23. [浏览器从输入URL到页面渲染的整个流程（涉及到计算机网络数据传输过程、浏览器解析渲染过程）](https://juejin.cn/post/6878273336766529543)

24. 跨域、同源策略及跨域实现方式和原理

25. [浏览器的回流（Reflow）和重绘（Repaints）](https://juejin.cn/post/6844903569087266823)

26. JavaScript中的arguments

27. EventLoop事件循环

28. 宏任务与微任务

29. BOM属性对象方法

30. 函数柯里化及其通用封装

31. JS的map()和reduce()方法

32. [“==”和“===”的区别](https://juejin.cn/post/7074780059512340487)

33. [setTimeout用作倒计时为何会产生误差？](https://juejin.cn/post/6844903861925199886)


## [web](https://juejin.cn/post/6844904115428917255)

[1 html5语义化标签](https://rainylog.com/post/ife-note-1/)
[2 css](https://segmentfault.com/a/1190000013325778)
[3 阮一峰的flex系列](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## [高级](https://juejin.cn/post/6844904103504527374)







