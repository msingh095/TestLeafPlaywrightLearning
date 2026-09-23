// Assignment Details:
// Write a function to sum all the values between 1 and n, and return the sum
// Take n = 5, print between 1 and 5, and keep adding the sum of values
// i.e., 1+2=3, 3+3 =6, 6+4=10, 10+5 =15





function sum(n){

    let sum = 0   //Initialize `sum` to 0.
    for(let i=1;i<=n;i++){ // Iterate from 1 to `n`
        sum = i+sum;
        console.log(`i = ${i}, sum = ${sum}`); // print each step
    }
  
    return sum    // Return `sum` after the loop.
}
console.log(sum(5)) //Call the function with a specific value.