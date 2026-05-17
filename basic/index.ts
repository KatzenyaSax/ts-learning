// 基础测试
console.log('================================');
let message:string = 'hello';
console.log(message);

// 接口 & 类 测试
console.log('================================');
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
console.log('================================');
type newType = number | string | O;
const testNewType_1 : newType = 111;
const testNewType_2 : newType = '111';
const testNewType_3 : newType = new O("testNewType_3");

console.log(testNewType_1);
console.log(testNewType_2);
testNewType_3.instance();


// array
console.log('================================');
let arrayOfNumber : number[] = [1, 2, 3];
let arrayOfString : Array<string> = ['a', 'b', 'c'];
console.log(arrayOfNumber);
console.log(arrayOfString);

// tuple
console.log('================================');
let person : [string, number] = ['name_of_person', 18];
console.log(person);

// object
console.log('================================');
let obj:object = {
    name:'object',
    age: 18
}
console.log(obj);



// any
console.log('================================');
let i :any = 1;
console.log(typeof i);
//i.ifItExists(); // tsc 编译时不会报错，因为 any 允许调用任何方法，但在运行时会报错，因为 ifItExists() 不是 number 类型的方法
i.toFixed(); // 编译与运行时均不会报错，因为 toFixed() 是 number 类型的方法


let arrayAny : any[] = [1, 'a', true, {name:'object', age: 18}, [1, 2, 3]];
console.log(arrayAny);



// null
console.log('================================');
let nullValue : null = null;
console.log(nullValue + ":" + typeof nullValue);


