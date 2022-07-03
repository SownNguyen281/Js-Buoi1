// console.log ("Hello World 2 !!!");

// var name = "Hoàng Sơn" ;
// var age = 33 ;
// age = 40;

// //camel case
// var phoneNumber = "0782447430";
// var dateOfBirth = "28/01/1989";


// console.log(name);
// console.log(age);
// console.log(phoneNumber);

// //operator
// var res1 = 1 + 2;
// var res2 = 1 – 2;
// var res3 = 1*2;
// var res4 = 5/6 ;
// var res7 = 5 + “7” ;
// var res8 = 5 - “7” ; 

// res1 = res1 + 6; //res1 = 17

// res2++;
// // res2 = res2 +1

// res2--;

// res3 += 5; // res3 =res3 +5

// var res10 = res5++ + 2;
// // res10 = 5 + 2 =7

// var11 = ++res5 +2 ;
// // = 6 + 2= 8


//bài 1
/*
input : lương 1 ngày
        nhập số ngày làm

process : 
    1.lấy input (hardcode)
    2. tính lương = lương 1 ngày * số ngày làm
    3.log lương ra màn hình

output :
*/
var salaryPerDay = 100000;
var workingDay = 26;
var totalSalary = salaryPerDay * workingDay

console.log("Tổng lương trong tháng :",totalSalary)


//Bài 2
/**
 * input : nhập 5 số thực
 * 
 * process : nhập 5 số thực
 *           tính trung bình
 *              log kết quả
 * 
 * output:
 */
var num1 = 2;
var num2 = 1;
var num3 = 3;
var num4 = 5;
var num5 = 4;
var sum;
sum = num1 + num2 + num3 + num4 + num5 ;
var average = sum / 5 ;

console.log("Số trung bình của 5 số :" , average)


//bài 3
/**
 * input : giá USD = 23.500 vnd
 *          nhập số tiền usd
 *          đổi từ USD sang vnd
 *          tính và xuất số tiền sau khi đổi
 *      
 * 
 * process: nhập input : usd,vnd,money
 *          usd =23.500
 *          vnd = money * usd
 *          
 *          
 * 
 * output:  vnd
 */

var money = 20;
var usd = 23500;
var vnd = money * usd;


console.log(money ,"USD đổi sang VND là : ", vnd , "VND");



// Bài 4
/**
 * input: nhập chiều dài,chiều rộng hcn
 *          tính diện tích,chu vi
 * 
 * 
 * process: 
 *          1.nhập input: lenght,wide,dienTich,chuVi
 *          2. tính chuVi = (dài + rộng) * 2
 *              tính dienTich = dài * rộng
 * 
 * output: dienTich,chuVi
 */

var lenght = 20;
var wide = 30 ;
var dienTich = lenght * wide;
var chuVi = (lenght + wide) *2;

console.log("Chiều dài là : ", lenght);
console.log("Chiều rộng là : ", wide);

console.log("   Chu Vi hình chữ nhật là : ", chuVi);
console.log("   Diện Tích là :", dienTich);

//bài 5
/**
 * input :  nhập số có 2 chữ số
 *          tính tổng 2 ký số của số vừa nhập
 *      
 * 
 * process: 
 *     1.nhập input: số n,ký số 1 num1,ký số 2 num2, tổng 2 số sum
 *      2. sum = num1 + num 2          
 * 
 * output: sum
 */

var n = 26;
var num1 = n % 10; //=6
var num2 =  Math.floor(n / 10) ;//2
    //math.ceil (n / 10) ;= 3
    //math.round (n / 10) ; = 3
var sum = num1 + num2;


console.log("Số đã nhập : ", n);
console.log("   Ký số 1 là : " , num1);
console.log("   Ký số 2 là : " , num2);
console.log("   Tổng 2 ký số là : " , sum);