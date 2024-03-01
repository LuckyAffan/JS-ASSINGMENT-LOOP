// ASSINGMENT # 04

/*let arr = ("orange,mango,apple.,staubery")
console.log(arr);
function pop(){
    arr.pop();
}*/


//Basic loop
for (var i = 1; i <= 5; i++){
    console.log(i)
  }
  
  //Summation for loop
  let sum = 0
  for(let i = 1; i <= 10; i++ ){
    sum += i;
  }
  console.log(sum);
  
  //Reverse couting for loop
  for(let i = 10; i >= 1; i-- ){
      console.log(i);
  } 
  
  //Multiplication for loop
  let number = 5;
  for(let i = 1;i <= 5;i++){
      console.log(number*i);
  } 
  
  let pattern = ""
  for(let i=1;i<=5;i++){
      let pattern = "";
      for(let j=1;j<=i;j++){
          pattern+= '*';
      }
      console.log(pattern);
  }