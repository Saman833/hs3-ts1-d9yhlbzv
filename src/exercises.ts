/** Explicity type all values, parameters, and functions. */

/**
 * 1. Exercise
 *
 * Create a function that takes in two parameters, a string and a number.
 * The function should return the string repeated n number of times.
 */

// YOUR CODE HERE
export function strings(ph_count: number, ph: string): string[] {
  let result: string[] = [];
  for (let i = 0; i < ph_count; i++) {
    result.push(ph);
  }
  return result;
}
/**
 * 2. Exercise
 *
 * Create an interface for a car object.
 * The car object should have properties for make, model, year, and color.
 */

// YOUR CODE HERE

interface Car {
  make:string ;
  model: string;
  year: number;
  color: [number, number, number];
}
/**
 * 3. Exercise
 *
 * Create a class for a book that has properties for title, author, and year published.
 * Add a method to the class that returns the number of years since the book was published.
 */

// YOUR CODE HERE
export class Book {
  title: string;
  author: string;
  year: number;
  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  SincePublishYears(): number {
    return new Date().getFullYear()-this.year;
  }
}
/**
 * 4. Exercise
 *
 * Create a function that takes in an array of numbers and
 * returns the sum of all the even numbers in the array.
 */
export function evenSum(number_array: number[]): number {
  let the_sum = 0;
  for (let i = 0; i < number_array.length; i++) {
    let numb = number_array[i];
    the_sum += numb * (1 - (numb % 2));
  }
  return the_sum;
}

// YOUR CODE HERE

/**
 * 5. Exercise
 *
 * Create an User class
 * The User class should have properties for username, email, and password, i.e. also in the constructor function
 * The User class should have a validatePassword method that validates password.
 * The method should return boolean and the validation should be minimum 6 characters.
 */

class User {
  username: string;
  email: string;
  password: string;
  constructor(username: string, email: string, password: string) {
    this.password = password;
    this.email = email;
    this.username = username;
  }
  validatePassword(): boolean {
    return (this.password.length >= 6);
  }
}
// YOUR CODE HERE
