
# [前端知识点汇总](https://zhuanlan.zhihu.com/p/101986056)
## JavaScript

1. 原始值和引用值类型及区别

js中的原始值包括了null , undefined , boolean , Number , String

引用值类型则是对象Object.Array，Function,Data,RegExp,Error都是特殊的Object对象

原始值从设计上来说是不可改变的，试想你不可能去改变一个数字本身的含义。所以他们只有值相等的时候才会相等。
String类型特殊一点。他可以看起来像是一个Array（当然他并不是），他的比较方式是先比较长度，在比较每一个位置上的值，只有都相等的时候才算相等。
所以string类型本身自带的所有方法都是不会改变原字符串的



2. 判断数据类型typeof、instanceof、Object.prototype.toString.call()、constructor

3. 类数组与数组的区别与转换

4. 数组的常见API

5. bind、call、apply的区别

6. new的原理

7. 如何正确判断this？

8. 闭包及其作用

9. 原型和原型链

10. prototype与__proto__的关系与区别

11. 继承的实现方式及比较

12. 深拷贝与浅拷贝

13. 防抖和节流

14. 作用域和作用域链、执行期上下文

15. DOM常见的操作方式

16. Array.sort()方法与实现机制

17. Ajax的请求过程

18. JS的垃圾回收机制

19. JS中的String、Array和Math方法

20. addEventListener和onClick()的区别

21. new和Object.create的区别

22. DOM的location对象

23. 浏览器从输入URL到页面渲染的整个流程（涉及到计算机网络数据传输过程、浏览器解析渲染过程）

24. 跨域、同源策略及跨域实现方式和原理

25. 浏览器的回流（Reflow）和重绘（Repaints）

26. JavaScript中的arguments

27. EventLoop事件循环

28. 宏任务与微任务

29. BOM属性对象方法

30. 函数柯里化及其通用封装

31. JS的map()和reduce()方法

32. “==”和“===”的区别

33. setTimeout用作倒计时为何会产生误差？