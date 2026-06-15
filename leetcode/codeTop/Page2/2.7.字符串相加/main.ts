function transfer(beTransfering: string|number):string|number{
    switch(beTransfering){
        case("0"): return 0;
        case(0): return "0";
        case("1"): return 1;
        case(1): return "1";
        case("2"): return 2;
        case(2): return "2";
        case("3"): return 3;
        case(3): return "3";
        case("4"): return 4;
        case(4): return "4";    
        case("5"): return 5;
        case(5): return "5";
        case("6"): return 6;
        case(6): return "6";
        case("7"): return 7;
        case(7): return "7";
        case("8"): return 8;
        case(8): return "8";
        case("9"): return 9;
        case(9): return "9";
        default: {
            if(typeof(beTransfering)=="string") return 0; else return "";
        }
    }
}

function addStrings(num1: string, num2: string): string {

    if(num1=="") return num2;
    if(num2=="") return num1;


    let str1: string[] = num1.split("");
    let str2: string[] = num2.split("");

    let longer: string[], shorter:string[];
    if(str1.length>=str2.length){
        longer = str1;
        shorter = str2;
    } else {
        longer = str2;
        shorter = str1;
    }

    //长字符串的index，从右往左
    let r2l = longer.length-1;

    //进位
    let up = 0;
    for(let i=shorter.length-1; i>=0; i--){

        console.log("longer index: "+r2l+" ,shorter index: "+i);

        let sum = (transfer(shorter[i]) as number) + (transfer(longer[r2l]) as number) + up;
        if(sum>9) up = 1;
        else up = 0;


        console.log(longer);

        //把数字放到长数组上
        longer[r2l--] = transfer(sum%10) as string;



    }

    //继续处理长数组的前面1进位
    while(r2l>=0 && up==1){
        let sum = (transfer(longer[r2l]) as number) + up;
        longer[r2l--] = transfer(sum%10) as string;
        if(sum > 9) up = 1; //如果还大于10，继续进位
        else up = 0;
    }


    let out = "";

    //加到最后一位，还是进位，说明这个结果应该是10000··xxxx这种形式
    if(up==1) out+="1";
    longer.forEach(s=>{
        out+=s;
    })
        
    return out;
};


//console.log(addStrings("11","123"));


/**
 *      7   7
 *  4   5   6
 * 
 * 
 * 
 */

console.log(addStrings("456","77"));