// Object所有实例具有的的属性和方法:
//   constructor:保存着用于创建当前对象的函数
//   hasOwnProperty():用于检查给定的属性在当前对象实例中是否存在
//   isPrototypeof():检查传入的对象是否是传入对象的原型
//   propertyIsEnumerable():给定的属性是否能够forin

//   toLocalString():返回对象的字符串表示，与执行环境的区域对应
//   toString():返回对象的字符串表示
//   valueOf():返回对象的字符串、数值或布尔值表示（通常与）


var obj1={}; // 对象字面量方式
var obj2=new Object(); // 构造函数模式
  // 实际经历了4部：
  //   1. 创建一个新对象
  //   2. 将构造函数的作用域复制给新对象
  //   3. 执行构造函数中的代码
  //   4. 返回新对象
