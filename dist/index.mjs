// src/functions.ts
function sayHello({ firstName, lastName, age }) {
  console.log("Hello");
  console.log("your first name is " + firstName);
  if (lastName) {
    console.log("your first name is " + lastName);
  }
  if (age) {
    console.log("your age is " + age);
  }
}
export {
  sayHello
};
