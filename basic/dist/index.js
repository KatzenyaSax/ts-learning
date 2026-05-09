"use strict";
let message = 'hello';
console.log(message);
class Obj {
    instance() {
        console.log(this.element);
    }
    element = "element of obj";
}
new Obj().instance();
var obj = new Obj();
obj.element = "new element";
obj.instance();
