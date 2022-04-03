var readlineSync=require("readline-sync");
var userName=readlineSync.question("Please enter your name ");
var DOB=readlineSync.question("Enter your Date Of Birth in DD/MM format ");
let isPrime = true;
var date=DOB.split("/");
console.log(date[0])
if (date[0]==1){
  console.log(userName.toUpperCase()+" your Date Of Birth is neither prime nor composite number");
}
else if (date[0]>1 && date[0]<=31){
  for (let i=2;i<date[0];i++){
    if (date[0]%i==0){
       isPrime=false;
       break;
    }
  }
if (isPrime)
  console.log(userName.toUpperCase()+" your Date Of Birth is prime number")
else
  console.log(userName.toUpperCase()+" your Date Of Birth is not prime number")
}
else if (date[0]>31 || date[1]>12 ){
  console.log('Invalid DOB given')
}

