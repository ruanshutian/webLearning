/*
深拷贝和浅拷贝的区别？

浅拷贝和深拷贝都是创建一份数据的拷贝。

JS 分为原始类型和引用类型，对于原始类型的拷贝，并没有深浅拷贝的区别，我们讨论的深浅拷贝都只针对引用类型。

1 浅拷贝和深拷贝都复制了值和地址，都是为了解决引用类型赋值后互相影响的问题。

2 但是浅拷贝只进行一层复制，深层次的引用类型还是共享内存地址，原对象和拷贝对象还是会互相影响。

3 深拷贝就是无限层级拷贝，深拷贝后的原对象不会和拷贝对象互相影响。

 */

/*
前置知识

两个对象指向同一地址， 用 == 运算符作比较会返回 true。

两个对象指向不同地址， 用 == 运算符作比较会返回 false。

 */

const obj={};
const newObj=obj;
console.log(obj == newObj);

const obj2={};
console.log(obj == obj2);


/*
引用类型互相赋值
直接赋值，两个对象指向同一地址，就会造成引用类型之间互相影响的问题：
 */
const obj3 = {
    name: 'lin'
}

const newObj3 = obj3
obj3.name = 'xxx' // 改变原来的对象

console.log('原来的对象', obj3)
console.log('新的对象', newObj3)

console.log('两者指向同一地址', obj3 == newObj3)

/*
使用浅拷贝
使用 lodash 浅拷贝 clone 方法，让他们俩指向不同地址，即可解决这个问题：
 */
// import { clone } from 'lodash'
let _ = require('lodash');

const obj4 = {
    name: 'lin'
}

const newObj4 = _.clone(obj4)
obj4.name = 'xxx'     // 改变原来的对象

console.log('原来的对象', obj4)
console.log('新的对象', newObj4)

console.log('两者指向同一地址', obj4 == newObj4)

/*
但是浅拷贝只能解决一层，更深层的对象还是会指向同一地址，互相影响：
 */
const obj5 = {
    person: {
        name: 'lin'
    }
}

const newObj5 = _.clone(obj5)
obj5.person.name = 'xxx'    // 改变原来的对象

console.log('原来的对象', obj5)
console.log('新的对象', newObj5)

console.log('更深层的指向同一地址', obj5.person == newObj5.person)

/*
使用深拷贝
这个时候，就需要使用深拷贝来解决：
 */

const obj6 = {
    person: {
        name: 'lin'
    }
}

const newObj6 = _.cloneDeep(obj6)
obj6.person.name = 'xxx' // 改变原来的对象

console.log('原来的对象', obj6)
console.log('新的对象', newObj6)

console.log('更深层的对象指向同一地址', obj6.person == newObj6.person)

