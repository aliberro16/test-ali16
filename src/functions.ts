import { SayHelloProp } from "./types";

export function sayHello({ firstName, lastName, age }: SayHelloProp) {
  console.log("Hello");
  console.log("your first name is " + firstName);
  if (lastName) {
    console.log("your first name is " + lastName);
  }
  if (age) {
    console.log("your age is " + age);
  }
}
