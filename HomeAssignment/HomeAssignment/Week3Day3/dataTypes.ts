/* Data Types in TypeScript */
//  number - whole , decimal
//  string - characters, sequence of characters
//  boolean - 
// undefined
// null
// // any

// let employee: any = "Megha Singh"; // any type
// employee = 123;
// employee = true;
// console.log(employee, typeof employee);

// // unknown
// let address: unknown = "12345"; // any type
// address = "Patna";
// //address = true;
// if (typeof address === "string") {
//     console.log(address.toUpperCase());
// }
// void

// function login():void{
//     return "Hello" //
// }

// console.log(login())

//never
// function log():never{
//  throw new Error("This function never returns");
// }
// log()
// console.log("This line will never be executed because the function above throws an error.");

//tuple
// let array1: [string, number, boolean] = ["Megha Singh", 123, true];
// console.log(array1);
// array1.push("undefined");