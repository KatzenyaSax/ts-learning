# typescript learning

## 安装

### 前置 node & npm

### 安装 typescript

安装ts：

```bash
npm install typescript
```

查看安装状况：

```bash
tsc --version
```

安装tsx，直接运行 ts 不需要构建 js：

```bash
npm install -g tsx
```

---

## 文件结构

### .ts 与 .js 的变量名冲突

由于使用 tsc 命令时，生成的 .js 文件会直接输出到与 .ts 文件同一文件夹下，而 IDE 会同时在分析 .ts 和 .js，容易造成变量名冲突。所以应当在 tsc 时将 .js 放到另一个文件夹下。

解决方法是在 tsconfig.json 里定义 tsc 的 .js 输出位置：

先初始化:

```bash
tsc --init
```

它会：

```
Created a new tsconfig.json
```

然后在里面添加（这个初始化里面有注释的）：

```json
{
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

这样一来，将 .js 放到 dist/ 下方，就不会与 .ts 造成变量名冲突了。

### 一个简单的 ts 项目文件结构

```
├── dist\
  │   └── index.js
  ├── index.html
  ├── index.ts
  └── tsconfig.json
```

虽然我们考虑了 .js ，但很多时候我们是不用考虑 .js 的，只用 tsx 就可以直接一步到位运行 .ts 了。

---

## ts 基本语法

### 变量

用 let 和 const，不建议用 var：

```ts
let a:number = 10;
const pi:number = 3.14;
```


### 函数

```ts
function func(param_1:number, param_2:string) : string{
    return param_1 + param_2;
}
```

或箭头函数（函数体只有return的函数）：

```ts
function func(param_1:number, param_2:string) : string => param_1 + param_2;
```

### 类 & 接口

接口定义结构，类实现接口：

```ts
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
```

类的构造函数可以重载多次，但只能实现一次，而且必须能够处理所有构造的声明。


### 类型别名

```ts
type newType = number | string | O;
const testNewType_1 : newType = 111;
const testNewType_2 : newType = '111';
const testNewType_3 : newType = new O("testNewType_3");

console.log(testNewType_1);
console.log(testNewType_2);
testNewType_3.instance();
```

这样一来，使用 newType 可以用于构造三种不同类型的变量

### export & import

给一个变量/函数打上 export 关键字，就是将该变量/函数向外界暴露，那么这个变量/函数所属的文件被其他文件 import 时，这个变量/函数可以被其他文件所使用。

反之，没有被打上 export 关键字的变量/函数，即使被 import 也无法被其他文件使用。

### 类型推断 & 断言 & 类型守卫

#### 类型推断

首先是类型推断，众所周知 ts 在声明变量时是不需要给定类型的，就比如：

```ts
const value = 10;
```

但是在编译时，编译器必须要知道变量的类型，这个时候面对 const value，看它的字面值 10，就能够推断出 value 的类型是 number 了。

不过在有时候，编译器难以准确推断出类型，例如：

```ts
const arr = ['hello', 123, true];
const first = arr[0];
first.toUpperCase();
```

你想要将 "hello" 变为大写字母，显然 first 取的是 arr 的第 0 个值，必然是 string。然而，根据 arr 的所有值，编译器将 first 的类型推断为： string | number | boolean，这样一来，toUpperCase() 必然报错。

#### 断言

为了解决这个问题，需要开发者自行进行类型标定，也就是断言，即告诉编译器，开发者非常确信某变量的类型，让它跳过推断，直接使用这个类型，就比如直接标定 arr[0] 是 string：

```ts
(first as string).toUpperCase();
```

这就解决了问题。

#### 类型守卫

除了进行断言这种方法，还能使用类型守卫，就是告诉它：如果不是这个类型的话，就啥也不做吧，千万不要让程序中断！

核心目的都是让程序顺利通过编译。

还是上面的例子：

```ts
const arr = ['hello', 123, true];
const first = arr[0];
if(typeof first === 'string'){
    first.toUpperCase();
}
```

如果编译器顺利推断出是 string ，那就正常执行；如果没法推断出来，那就算了吧，一点小瑕疵不影响编译通过就行。

---

## ts 对比 js

### 静态类型语言

js 是动态类型语言，也就是在程序运行中，变量的类型可以随机转变；而 ts 是静态类型语言，程序运行期间变量的类型都不运行发生变化。

### 编译型语言

ts 是编译型语言，但是与传统编译型语言这个概念大不相同：传统的编译语言会将高级语言源代码编译成硬件可执行的目标代码，拿到可运行的目标代码后，源代码就不需要再编译了；而 ts 的 "编译" 则单单指的是将 ts 转化为 js，实则是以 js 的方式实现 ts 中的一些强制规范，从而达成间接为 js 上强制规范的效果。

而 ts 编译为 js 后，就是单纯的解释运行了，解释器先翻译成中间代码，再照着中间代码一句一句再解释成机器码，从而运行。


## ts 变量类型

### array

有两种声明方式： type[] & Array<type>

```ts
let arrayNumbers_0 : number[] = [1, 2, 3];
let arrayNumbers_1 : Array<number> = [1, 2, 3];
console.log(arrayNumers_0);
console.log(arrayNumber_1);
```

### tuple

元组，允许将不同的类型放入同一个集合内，该集合的结构则不可变。

```ts
let person : [string, number] = ['name_of_person', 18];
```

#### tuple 和 object 

tuple 是一个从上到下，元素结构明确的集合结构；而 object 的元素之间没有任何先后大小顺序。


### enum

就是为从 0 开始的数字取个名字，最常见的作用是以防魔法值

```ts
enum ENUM{
    element1,   //0
    element2,   //1
    element3    //3
}
```

### any

任意类型，一般在三种情况使用：

#### 情况1：用户手动输入兜底

```ts
let i : any;
```

用户可能会胡乱输入任何东西，那么这个时候使用 any，起码不会造成非法输入的问题，后续再做校验即可

#### 情况2：绕过 "该变量使用当前类型不存在的方法" 导致的编译失败

```ts
let i :any = 1;
console.log(typeof i);  //number
i.ifItExists(); // tsc 编译时不会报错，因为 any 允许调用任何方法；但在运行时可能会报错，因为如果 ifItExists() 不是 number 类型的方法，那么在 js 环境下肯定会报错
```

首先，我们定义的 i 的类型是 any，但实际上编译器会自动将 i 推断为 number，因为它的值为 1。

可以看看编译之后的 js：

```js
let i = 1;
console.log(typeof i);  
i.ifItExists(); // tsc 编译时不会报错，因为 any 允许调用任何方法，但在运行时会报错，因为 ifItExists() 不是 number 类型的方法
```

显然，这样是会报错的，any 类型在 js 中被抹除了，因为 js 本来就允许变量类型动态变化。

报错信息：

```
C:\Users\a1829\Desktop\ts-learning\basic\dist\index.js:56
i.ifItExists(); // tsc 编译时不会报错，因为 any 允许调用任何方法，但在运行时会报错，因为 ifItExists() 不是 number 类型的方法
  ^

TypeError: i.ifItExists is not a function
    at Object.<anonymous> (C:\Users\a1829\Desktop\ts-learning\basic\dist\index.js:56:3)
    at Module._compile (node:internal/modules/cjs/loader:1565:14)
    at Object..js (node:internal/modules/cjs/loader:1708:10)
    at Module.load (node:internal/modules/cjs/loader:1318:32)
    at Function._load (node:internal/modules/cjs/loader:1128:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:219:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
    at node:internal/main/run_main_module:36:49
```


#### 情况3：便于使用集合存储不同类型变量

```ts
let arrayAny : any[] = [1, 'a', true, {name:'object', age: 18}, [1, 2, 3]];
```


### void


### null & undefined

#### null

在 js 中，null 本质上是一个空对象的代称，用 typeof 显示的是 object

```ts
let nullValue : null = null;
console.log(nullValue + ":" + typeof nullValue);
// null:object
```

#### undefined

undefined 是一个


