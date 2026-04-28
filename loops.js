//while loop to calculate the sum of all numbers from 1 to 5 
let sum=0;
let i=0;
while(i<=5){
    sum+= i;
    i++
}
console.log(sum);

//go from 5 to 1 and store numbers in an array called countdown
let a=5;
let countdown = [];
while(a>=1){
    countdown.push(a);
    a--;
    console.log(a);
}
console.log(countdown);

//this code runs in browser as prompt is not defined in node
// let result = prompt("Enter your favourite tea");
// let tea = [];
// let ctr=0;
// do{
//     tea[ctr] = result;
//     ctr++
//     result = prompt("Enter your favourite tea");
// }while(result!=="stop")
// console.log(tea);

//Write a do while loop that adds numbers from 1 to 3 and stores in `total`
let num = 1;
let summation = 0;
do{
    sum+=num;
    num++;
}while(num<=3)
console.log("Printing sum:", sum);