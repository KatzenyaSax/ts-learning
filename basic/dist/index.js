"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 基础测试
console.log('================================');
let message = 'hello';
console.log(message);
// 接口 & 类 测试
console.log('================================');
class O {
    //变量
    element;
    /**
     * @param param
     * 实现构造，注意只能实现一次，且必须涵盖所有声明的构造
     * 同时处理了有参与无参两种情况
     */
    constructor(param) {
        this.element = param ?? 'default';
    }
    //类方法
    instance() {
        console.log(this.element);
    }
}
new O().instance();
new O("new O").instance();
// 类型别名测试
console.log('================================');
const testNewType_1 = 111;
const testNewType_2 = '111';
const testNewType_3 = new O("testNewType_3");
console.log(testNewType_1);
console.log(testNewType_2);
testNewType_3.instance();
// array
console.log('================================');
let arrayOfNumber = [1, 2, 3];
let arrayOfString = ['a', 'b', 'c'];
console.log(arrayOfNumber);
console.log(arrayOfString);
// tuple
console.log('================================');
let person = ['name_of_person', 18];
console.log(person);
// object
console.log('================================');
let obj = {
    name: 'object',
    age: 18
};
console.log(obj);
// any
console.log('================================');
let i = 1;
console.log(typeof i);
i.ifItExists(); // tsc 编译时不会报错，因为 any 允许调用任何方法，但在运行时会报错，因为 ifItExists() 不是 number 类型的方法
i.toFixed(); // 编译与运行时均不会报错，因为 toFixed() 是 number 类型的方法
//# sourceMappingURL=index.js.map