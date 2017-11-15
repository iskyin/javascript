/**
  javascript包含：
    核心（ECMAScript)
      由ECMA-262定义（ECMAScript与web浏览器没有依赖关系。web浏览器只是一种宿主环境）
      ECMAScript第三版标志着其成为真正的编程语言
      浏览器支持情况:
        IE5.5-IE7     第3版
        IE8           第5版
        IE9+          第5版
        safari(苹果浏览器)、Chrome（谷歌）、Firefox（火狐）起点都是 第3版

    文档对象模型（DOM）
      提供访问和操作王贺内容的方法和接口

      DOM级别:
        DOM0:
          IE4.0 和 网景4.0 最初支持的DHTML

        DOM1:
          主要实现了文档的结构的映射
          包含:
            DOM Core
            DOM HTML
        DOM2:
          在原DOM基础上引入了 视图、事件、样式、遍历和范围

        DOM3:
          进一步扩展了DOM（引入了同意方式加载和保存文档的方法等)

        浏览器支持情况：
          IE5-8 DOM 1
          IE9+ DOM 1、2、3


    浏览器对象模型（BOM）
      提供与浏览器交互的方法和接口


  脚本引入:
    因HTML5的规范要求脚本按照他们出现的先后顺序执行，所以把延迟脚本放在页面底部是最佳选择

**/

// 区分大小写
//   ECMAScript中的一切(变量、函数、操作符)都区分大小写

var A='abc';
var a='1234';
console.log("A: ",A," a: ",a);



console.log(' --------------- 严格模式 --------------- ')
// 严格模式
//  设立"严格模式"的目的:
//    1. 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
// 　　2. 消除代码运行的一些不安全之处，保证代码运行的安全；
// 　　3. 提高编译器效率，增加运行速度；
// 　　4. 为未来新版本的Javascript做好铺垫。

// 这个了解一下，心里有个概念就好，等学完了，看ES6的时候，在具体详细解释

function testStrict(){
  // 开启严格模式
  // // 'use strict'
  test='测试变量' // 在严格模式下报错 ，因为严格模式下，变量都必须先用var命令声明，然后再使用。
  console.log("测试严格模式 -->: ",test);
}
testStrict();
console.log("省略var将会变为全局变量：",test)// 非严格模式下，省略var操作符，变量将会是个全局变量

// 数据类型
//  基本数据类型：
      // Undefined: 值未定义
      // Null：空
      // Boolean：布尔类型
      // Number：数值
      // String：字符串类型
//  复杂数据类型：Object



console.log(' --------------- typeof --------------- ')
// typeof 操作符 可以区分基本数据类型（null除外）
var undf;
console.log(typeof undf); // undefined;
console.log(undf===undefined); // true;

var bool=true;
console.log(typeof bool ); // boolean;

var str="abc";
console.log(typeof str); // string;

var _null=null;
console.log(typeof _null); // object;

var arr=[];
console.log(typeof _null); // object;

var obj={};
console.log(typeof obj); // object;

var fun=function(){};
console.log(typeof fun); // function;


console.log(' --------------- instanceof --------------- ')
// instanceof 用于判断一个变量是否某个对象的实例
var arr2=[];
console.log(arr2 instanceof Array); // object;

var obj2={};
console.log(obj2 instanceof Object); // object;

var fun2=function(){};
console.log(fun2 instanceof Function); // function;


console.log(' --------------- NaN --------------- ')
// NaN 表示 非数值 (比如任何数除以0)
console.log(NaN===NaN); // false

console.log(' --------------- 操作符 --------------- ')
// 求模（余数） %  即：求余
console.log(25%6); // 1

// 相等 ==
console.log(null==undefined); // true

console.log(' --------------- 语句 --------------- ')
// for-in 精准的迭代语句 ，可以用来枚举对象的属性
var abcObj={
  a:'1',
  b:'2',
  bb:undefined,
  c:'3',
  d:'4',
  e:'5',
}
for(var item in abcObj){
  if(item==null||item==undefined){
    // 如果迭代对象变量值为null或者undefined时会抛出错误(es5更正为不抛出异常，只是不执行循环体)
  }else{
    console.log("abcObj属性：",item);
  }
}

console.log(' --------------- break --------------- ')

for(var i=1; i<10; i++){
  if(i%2==0){
    break;
  }
  console.log('i -> : ',i);
}


console.log(' --------------- continue --------------- ')

for(var i=1; i<10; i++){
  if(i%2==0){
    continue;
  }
  console.log('i -> : ',i);
}


console.log(' --------------- arguments --------------- ')
function funAgt(a,b,c,d,e){
  console.log("funAgt: ",arguments);
}
funAgt(1,2,'a','b');















//
