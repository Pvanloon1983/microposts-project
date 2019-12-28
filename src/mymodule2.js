export const person = {
  name: 'John',
  age: 30
};

export function sayHello() {
  return `Hello ${person.name}`;
}

// In this way you do not have to use import with {}
const greeting = 'Hello World!';
export default greeting;
