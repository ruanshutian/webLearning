let obj = {
    name: this.name,
    objAge: this.age,
    myLove: function (fm, t) {
        console.log(this.name + "年龄" + this.age, "来自" + fm + "去往" + t);
    },
};
let obj1 = {
    name: "huang",
    age: 22,
};
obj.myLove.call(obj1, "达州", "成都"); //huang年龄22来自达州去往成都
obj.myLove.apply(obj1, ["达州", "成都"]); //huang年龄22来自达州去往成都
obj.myLove.bind(obj1, "达州", "成都")(); // huang年龄22来自达州去往成都


/*
- call，apply，bind都是  可以改变函数体内this的指向。
- call，apply，bind使用时，传入的第一个参数都是用来传递this的指向的，也就是对上下文的指定
- call，apply，bind都是可以传入多个参数，不同的是，call和bind的后续参数都是按照顺序传参，
而apply的传参类型是数组；bind的参数可以在函数执行的时候再次添加。
 */