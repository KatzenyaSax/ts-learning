// 基础测试
console.log('=============================================');
let message:string = 'hello';
console.log(message);

// 接口 & 类 测试
console.log('=============================================');
interface I{
    instance():void;
    element:string;
}
class O implements I {
    //变量
    element:string;
    //声明构造，重载有参无参
    constructor();
    constructor(param:string);
    /**
     * @param param 
     * 实现构造，注意只能实现一次，且必须涵盖所有声明的构造
     * 同时处理了有参与无参两种情况
     */
    constructor(param?:string){
        this.element = param ?? 'default';
    }
    //类方法
    instance():void{
        console.log(this.element);
    }
}
new O().instance();
new O("new O").instance();

// 类型别名测试
console.log('=============================================');
type newType = number | string | O;
const testNewType_1 : newType = 111;
const testNewType_2 : newType = '111';
const testNewType_3 : O =new O("testNewType_3");

console.log(testNewType_1);
console.log(testNewType_2);
testNewType_3.instance();
