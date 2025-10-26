/**
 * Create a TypeScript interface, object type, or class called Person that has the following properties:
 *
 * - `name` (string)
 * - `age` (number)
 * - `gender` (union type 'MALE', 'FEMALE', 'OTHER')
 * - `greet` (a function that takes no arguments and returns a string)
 *
 * Create an object or instance that satisfies the created type. The `greet` method should return "Hello, my name is `[name]` and I am `[age]` years old." where `[name]` and `[age]` is the value of the name and age properties.
 *
 * Call the `greet` method on the value and set the result to the result text.
 */

// YOUR CODE HERE


interface Person {
    name : string ;
    age : number ;
    gender: "MALE" | "FEMALE" | "OTHER";
    greet():string;
};
const person: Person={
  name : "saman",
  age:20 ,
  gender:"MALE" , 
  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
}
const result = document.getElementById('result');
if (result) {
  result.innerText = person.greet() ;
}
