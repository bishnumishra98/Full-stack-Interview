// The DOM (Document Object Model) is a programming interface for web documents. It represents the structure
// of a webpage as a tree-like model, allowing developers to manipulate the content, structure, and styling
// of a web page dynamically using languages like JavaScript.

// Example:
<html>
    <body>
        <h1>Hello World</h1>
        <p>This is a paragraph.</p>
    </body>
</html>

// DOM Tree
// html
// └── body
//     ├── h1
//     └── p

// The DOM represents the above HTML document as a tree-like structure with nodes for each element, attribute,
// and text content. The root node is the document itself, and it has child nodes for the <html>, <body>, <h1>,
// and <p> elements. The DOM allows developers to access and manipulate these nodes using JavaScript.

// DOM Terminology
// 1. Node:               Every element, attribute, or piece of text is a node in the DOM.
// 2. Element Node:       Represents an HTML tag like <div>, <p>, etc.
// 3. Text Node:          Represents the text inside an HTML element.
// 4. Parent/Child Nodes: Relationships between elements (e.g., <body> is the parent of <h1>).


// Some basic methods to access elements in the DOM:

// 1. getElementById(): Returns an element by its ID.
//                      Syntax: document.getElementById(id)
//                      Example:
                        {/* <h1 id="title">Hello, World!</h1>
                        <script>
                            const element = document.getElementById("title");
                            console.log(element.textContent);   // Output: Hello, World!
                        </script> */}

// 2. getElementsByClassName(): Returns a collection of elements with the specified class name.
//                              Syntax: document.getElementsByClassName(className)
//                              Example:
                                {/* <p class="text">First</p>
                                <p class="text">Second</p>
                                <script>
                                    const elements = document.getElementsByClassName("text");
                                    console.log(elements[0].textContent);   // Output: First
                                </script> */}

// 3. getElementsByTagName(): Returns a collection of elements with the specified tag name.
//                           Syntax: document.getElementsByTagName(tagName)
//                           Example:
                            {/* <div>Div 1</div>
                            <div>Div 2</div>
                            <script>
                                const divs = document.getElementsByTagName("div");
                                console.log(divs[1].textContent);   // Output: Div 2
                            </script> */}

// 4. querySelector(): Returns the first element that matches a specified CSS selector.
//                     Syntax: document.querySelector(selector)
//                     Example:
                        {/* <p class="text">Hello</p>
                        <p class="text">World</p>
                        <script>
                            const element = document.querySelector(".text");
                            console.log(element.textContent);   // Output: Hello
                        </script> */}

// 5. querySelectorAll(): Returns a collection of elements that match a specified CSS selector.
//                        Syntax: document.querySelectorAll(selector)
//                        Example:
                            {/* <p class="text">Hello</p>
                            <p class="text">World</p>
                            <script>
                                const elements = document.querySelectorAll(".text");
                                elements.forEach((el) => console.log(el.textContent));   // Output: Hello, World
                            </script> */}
