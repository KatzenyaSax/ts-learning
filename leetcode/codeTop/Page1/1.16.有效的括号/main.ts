function getReverse(s:string):string{
    if(s=="[") return "]";
    if(s=="{") return "}";
    if(s=="(") return ")";
    if(s=="]") return "[";
    if(s=="}") return "{";
    if(s==")") return "(";
    return "";
}

function isLeft(s:string):boolean{
    return (s=="[" || s=="{" || s=="(")?true:false;
}

function isValid(s: string): boolean {
    
    let stack : string[] = [];

    let str:string[] = s.split("");
    str.forEach(s=>{
        if(stack.length==0) stack.push(s);
        //s只有是右括号时，才能消去左括号
        else if(!isLeft(s) &&getReverse(s) == stack[stack.length-1]) stack.pop();
        else stack.push(s);

        //console.log("stack: "+stack);
    })


    return stack.length==0?true:false;
};

console.log(isValid("(){}}{"));