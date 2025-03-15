// Event capturing and event bubbling are two phases in the DOM event propagation model, which describes how events
// flow through the DOM hierarchy.

// 1. Event Capturing (Trickling Phase):
// In this phase, the event is captured by the outermost element and propagated to the innermost element. It starts from
// the window object and goes down to the target element. The event capturing phase is also known as the trickling phase.

// Example:

{/* <div id="parent">
    <button id="child">Click Me</button>
</div>

<script>
    document.getElementById("parent").addEventListener(
        "click",
        () => console.log("Parent element clicked"),
        true   // set to true for capturing phase
    );

    document.getElementById("child").addEventListener(
        "click",
        () => console.log("Child element clicked"),
        true
    );
</script> */}

// When you click the button, the output will be:
// Parent element clicked
// Child element clicked


// 2. Event Bubbling (Bubbling Phase):
// In this phase, the event is captured by the innermost element and propagated to the outermost element. It starts from
// the target element and goes up to the window object. The event bubbling phase is also known as the bubbling phase.

// Example:

{/* <div id="parent">
    <button id="child">Click Me</button>
</div>

<script>
    document.getElementById("parent").addEventListener(
        "click",
        () => console.log("Parent element clicked")
    );

    document.getElementById("child").addEventListener(
        "click",
        () => console.log("Child element clicked")
    );
</script> */}

// When you click the button, the output will be:
// Child element clicked
// Parent element clicked
