let countNum = function(){

    let count = 0;
    return function(){  //调用countNum的时候返回嵌套的子函数
        return ++count;// count在作用域链内定义,父函数里
    };

}(); // 匿名函数的立即调用,返回嵌套函数
// countNum(),上面的匿名函数后若不加括号调用,则返回的结果将是return 后面的函数的整体代码
console.log(countNum());   // 1
console.log(countNum());   // 2
console.log(countNum());   // 3

/*
当每次调用countNum函数时,嵌套在该函数内的匿名函数是可以访问父函数(这里指的是countNum的)作用域的,
其实这就是所谓的闭包,作用链就是闭包的桥梁,用来连接内部函数与外部函数的关系,从而达到外部函数访问内部函数局部变量或者函数的目的,
其中被嵌套函数就可以称为是一个闭包小结
 */
/*
    产生闭包的原因是由作用域链引起的

    函数嵌套函数,被嵌套的函数就可以称为闭包

    子函数可以使用父函数的变量(访问其他函数内部的局部变量)
    让变量始终保存在内存中,避免自动垃圾回收(其实上面的例子中就已经用到了的)
    对外提供公有属性和方法
 */

/*
闭包（closure）是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合。
换而言之，闭包让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 中，闭包会随着函数的创建而被同时创建。
 */

// function init(){
//     let  name = "Mozilla";
//     function displayName(){//displayName() 是内部函数，一个闭包
//         console.log(name);
//     }
//     displayName();
// }
// init()

// function makeFunc() {
//     var name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
//
// var myFunc = makeFunc();
// myFunc();


function f1(){

    var n=999;

    nAdd=function(){n+=1}

    function f2(){
        console.log(n);
    }

    return f2;

}

var result=f1();

result(); // 999

nAdd();

result(); // 1000

