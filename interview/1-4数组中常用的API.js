/*

 */
//push()方法
// 在数组最后添加一个或多个新的元素，并返回新数组的长度 末尾增加
let arr =[1,2,3,4];
console.log(arr.push(5));//5,返回新数组的长度
console.log(arr)


//pop()方法
// 删除数组最后一个元素，并返回数组 末尾删除

let num=arr.pop();
console.log(num)
console.log(arr)

//unshift()方法
// 在数组前面添加一个或多个元素，并返回新的长度 首部添加
console.log(arr.unshift(5,1))
console.log(arr)

//shift()方法
// 删除数组首部元素，并返回被删的元素 首部删除
let num2=arr.shift();
console.log(num2)
console.log(arr)

/*
splice()方法
对数组进行删除和修改操作，返回被删除的元素组成的数组
语法：splice（index，length，增加的元素1，增加的元素2，...）
参数详解：
index：要删除元素的下标
length：删除的长度
增加的元素：从 index开始 新增的元素，放到被删除的数组中总成新的数组
 */

let reArr3 = arr.splice(1,3,1 ,[1 , 2] , [1, 2, 3])
console.log(reArr3)
console.log(arr)

/*
slice()方法
剪切当前数组，并返回一个包含剪切值的新数组，不会改变原数组
语法：slice（starIndex，endIndex）
参数详解：
starIndex：剪切开始的位置，返回的数组中包含开始位置的值
endIndex：剪切结束的位置，不包含结束位置的值
 */
arr = [1,2,3,4,5]
let newArr = arr.slice(2,4);
console.log(newArr)
console.log(arr)

//concat()方法
// 合并两个或多个数组，返回新数组，不会改变原数组
let a =[1,2,3];
let b = [2,3,4];
let c= a.concat(b);
console.log(a)
console.log(b);
console.log(c)

//join()方法
// 将数组转化为字符串，不会改变原数组，此方法会返回转换后的字符串，默认以, 分隔
arr = [1,2,3,4,5];
console.log(arr.join());
console.log(arr.join('-'));
console.log(arr)

//reverse()方法
// 用于颠倒数组中元素的顺序，返回的是颠倒后的数组，会改变原数组
arr = [1,2,3,4];
let re = arr.reverse();
console.log(re);
console.log(arr)

/*
indexOf() 方法 和 lastIndexOf() 方法
两者都会返回元素首次在数组中的位置，未找到就返回-1
区别在于：indexOf 从头查找   lastIndexOf 从尾部查找
语法：indexOf(某元素，startIndex)  lastIndex(某元素，startIndex)
参数说明：
某元素：要查找的元素
startIndex：开始查找的下标
 */
arr= [1,2,3,4,5,6,7,8]
console.log(arr.indexOf(5))
console.log(arr.lastIndexOf(5))
console.log(arr.indexOf(5,5))
console.log(arr.lastIndexOf(5,5))

/*
filter()方法
返回数组中满足条件的元素组成新数组，原数组不变
语法：filter(function(item,index,arry){})
参数说明：
回调函数会在每次遍历时判断 item 是否符合条件
 */

re = arr.filter((item)=>{
    return item>3;
})
console.log(re)
console.log(arr)

/*
map()方法
遍历数组的每个元素都会执行一遍回调函数，会把执行完的回调函数放到新数值中返回，不改变原数组
语法：数组.map(function(item,index,arr){})
参数说明：
是在遍历过程中对米格元素执行的回调函数
 */

re =arr.map((item,index,arr)=>{
    return item*10;
})
console.log(re);
console.log(arr)

/*
every()方法
用于判断数组中的元素是否满足条件，当每个元素都满足条件时，返回 true，否则返回 false
语法：数组.every(function(item,index,arr){})
 */

re =arr.every((item,index,arr)=>{
    return item>2;
})
console.log(re);
console.log(arr)

/*
some()方法
在遍历时查找是否满足条件的值，一旦找到就立刻停止，找到返回 true ，没有找到返回 false 。

语法：some(function(item,index,arr){})
 */
re =arr.some((item,index,arr)=>{
  return item>5;
})
console.log(re);
console.log(arr)


/*
forEach()方法
遍历整个数组，中途不能中断
语法：forEach(function(item,index,array){},this)
参数说明：
item：数组当前遍历的元素，默认从左到右依次获取数组元素
index：数组当前元素的索引，第一个元素的索引为0，依次累加
arr：当前遍历的数组
this：回调函数中this的指向
 */
arr=[1,2,3,4]
let obj={a:1};
arr.forEach((item,index,arr)=>{
    console.log(`当前元素为${item}索引为${index},属于数组${arr}`);
    console.log(this);//this指向obj
},obj)
arr.forEach(function (item,index,arr){
    console.log(`当前元素为${item}索引为${index},属于数组${arr}`);
    console.log(this);//this指向obj
},obj)
arr.forEach(function (item,index,arr){
    console.log(`当前元素为${item}索引为${index},属于数组${arr}`);
    console.log(typeof this);//this指向obj
})

















