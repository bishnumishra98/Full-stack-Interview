// Q) What is this keyword in JS ?
// A) this keyword refers to the object it belongs to. It has different values depending on where it is used:

//    1. In a method, this refers to the owner object.
//       Example:
//       const person = {  
//           firstName: "John",
//           lastName: "Doe",
//           fullName: function() {
//               return this.firstName + " " + this.lastName;
//           }
//       };
//       console.log(person.fullName());   // Output: John Doe

//    2. Alone, this refers to the global object.
//       Example:
//       console.log(this);   // Output: Window

//    3. In a function, this refers to the global object.
//       Example:
//       function myFunction() {
//           return this;
//       }
//       console.log(myFunction());   // Output: Window

//    4. In a function, in strict mode, this is undefined.
//       Example:
//       "use strict";
//       function myFunction() {
//           return this;
//       }
//       console.log(myFunction());   // Output: undefined

//    5. In an event, this refers to the element that received the event.
//       Example:
//       <button onclick="console.log(this)">Click me</button>   // Output: <button>Click me</button>
//       // When the button is clicked, the console will log the button element.

//    6. Methods like call(), and apply() can refer this to any object.
//       Example:
//       const person1 = {firstName: "John", lastName: "Doe"};
//       const person2 = {firstName: "Jane", lastName: "Doe"};
//       function fullName() {
//           return this.firstName + " " + this.lastName;
//       }
//       console.log(fullName.call(person1));   // Output: John Doe
//       console.log(fullName.call(person2));   // Output: Jane Doe

//    7. Arrow functions do not have their own this. They inherit it from the parent scope.
//       Example:
//       const person = {
//           firstName: "John",
//           lastName: "Doe",
//           fullName: function() {
//               return () => this.firstName + " " + this.lastName;
//           }
//       };
//       console.log(person.fullName()());   // Output: John Doe

//    8. In a constructor function, this refers to the newly created object.

//    9. In an object constructor, this refers to the newly created object.

//    10. In a class, this refers to the object created from the class.

//    11. In an object method, this refers to the owner object.
