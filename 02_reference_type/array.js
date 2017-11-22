// ECMAScript数组特点：
//  1. ECMAScript中数组的每一项可以保存任何类型的数据
var arr1=["abc",123,{name:'hello'},[1,2,3,4],'name',123];
console.log(arr1);
//  2.数组的大小是可以动态调整的
var arr2=new Array(2);
console.log(arr2.length);
arr2[4]='a';
console.log('修改后的长度: ',arr2.length,' 修改后的数组: ',arr2);
//  3. length不是只读的
var arr3 =['a','b','c'];
arr3.length=5; // 新增的每一项都会取undefined
console.log(arr3," ------ ",arr3[4]);


// 检测数组：
var isArr=[];
// 方法1 -- instanceof
console.log(isArr instanceof Array);
// 方法2 -- Array.isArray();  最终确定某个值到底是不是数组 es5的方法
console.log(Array.isArray(isArr));


// 转换方法：
//   1. toLocalString()
//   2. toString()
//   3. valueOf()
//   4. join()
var arr4 =[1,2,3,4,5];
console.log(arr4.join('--'));


// 栈（后进先出）
var stackArr=[1,2,3,4,5]
//   1. push():在数组末尾添加数据，返回数组长度
console.log(stackArr.push(6))
console.log(stackArr);
//   2. pop():从数组末尾移除最后一项，返回移除项
console.log(stackArr.pop())
console.log(stackArr);

// 队列 (先进先出)
//   1. shift():移除数组第一项，返回移除的项
console.log(stackArr.shift())
console.log(stackArr);
//   2. unshift():在数组前端添加任意项，返回数组长度
console.log(stackArr.unshift(6))
console.log(stackArr);


console.log('↓↓↓↓↓↓↓↓↓↓↓ 数组 排序方法 ↓↓↓↓↓↓↓↓↓↓↓')

// 排序
var pxArr=[6,3,2,1,6,5,10,9,8,11,1]
//   1. sort(): 升序排列数组项,返回经过排序后的数组 (比较的是字符串)
console.log(pxArr.sort());
//   2. reverse(): 反转数组项的顺序，返回经过排序后的数组 (比较的是字符串)
console.log(pxArr.reverse());

/**
 * 比较函数接收两个参数，
 *  如果第一个参数应该位于第二个之前则返回一个负数
 *  如果连个参数相等则返回0
 *  如果第一个参数应该位于第二个之后则返回一个正值
**/
var compare=function(v1,v2){
  if(v1<v2){
    return -1;
  }else if(v1>v2){
    return 1;
  }else {
    return 0;
  }
}

console.log(pxArr.sort(compare));
console.log(pxArr.reverse(compare));



console.log('↓↓↓↓↓↓↓↓↓↓↓ 数组 操作方法 ↓↓↓↓↓↓↓↓↓↓↓')
var copyArr=[1,'2','ab',88];

// concat 基于当前数组中的所有项创建一个 新数组
//  参数不传 -> 返回数组副本
//  参数是一个或多个数组 -> 将数组追加到数组后
var ctArr=copyArr.concat();

// slice 基于当前数组中的一或多个项目创建一个 新数组
//  参数不传 -> 返回数组副本
// 一个或两个参数 -> 开始和结束位置
var ctArr=copyArr.slice();


// splice()
//  2个参数 -> 删除任意数量的项 （起始位置，要删除的项）
//  3个参数 -> 向指定位置插入任意数量的项 （起始位置，要删除的项，要插入的项目）
//  4个参数 -> 向指定位置插入任意数量的项，同时删除任意数量的项
var ctArr=copyArr.slice();


console.log('↓↓↓↓↓↓↓↓↓↓↓ 数组 位置方法 ↓↓↓↓↓↓↓↓↓↓↓')






























//
