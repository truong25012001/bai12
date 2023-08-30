import { tinh } from "./sum.js";
const kq = tinh(10 , 20);
console.log(kq);
console.log(tinh(50,40));


var input = prompt('nhap vao xem nao: ');
console.log(input);

const  result = (a, b) =>{
    return a + b;
}

var a = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const tinhTong = (array) => {
    let tong = 0;
    for(var item of array){
        if(item % 2 == 0){
            tong += item;
        }
    }
    return tong;
}


const b = tinhTong(a);
console.log(b);


const ss = result(100 , 500);
console.log(ss);


let m = 10;
let n= 20;
const v = n > m ? 10 : 20;
console.log(v);