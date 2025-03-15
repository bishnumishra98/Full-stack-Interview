// Q) What is use strict in JavaScript?
// A) The "use strict" directive was new in ECMAScript version 5. It is not a statement, but a literal expression,
//    ignored by earlier versions of JavaScript. The purpose of "use strict" is to indicate that the code should be
//    executed in "strict mode". "use strict" helps make JavaScript safer, more reliable, and easier to debug by
//    imposing a stricter set of rules on your code. It makes it easier to write secure JavaScript code by preventing
//    common pitfalls and dangerous features of JavaScript.
//    Strict mode is declared by adding "use strict"; to the beginning of a script or a function.

//    Example 1:
//    // Normal JavaScript:
//    x = 3.14;   // this will not cause an error. 'x' will become a global variable.

//    Example 2:
//    // Strict mode:
//    "use strict";
//    x = 3.14;   // this will cause an error because x is not declared.
