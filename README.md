# Question Answers
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById is used for grab the element by using ID, getElementbyClassName is used for grab the element who has class, querySelector grabs the first matching element, and querySelectorAll grabs all matching elements.
### 2. How do you create and insert a new element into the DOM?
Ans: First of all, we use createElement() for creating a element. Inside the perentheses, we give the element type that we want to create, for example(const newDiv = document.createElement("div");) after that we add the contents in the element that we want to create.
For example:
newDiv.textContent = "Hello World";
then we will attach this new element to the parent container. For example: container.appendChild(newDiv);
Thus, we will create a new element

### 3. What is Event Bubbling? And how does it work?
Ans: Event Bubbling is simply like when i click a child the event doesn't stop there, rather it bubbles upward through its parent elements. When I click a element, it rises up to its parent. After that it raise to its grandparent. And it continues up to body -> html -> document

### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans. Event Delegation means adding one event listener to a parent element to handle events for its child elements. Event delegation is very useful in javascript. It gives better performance, works for dynamically added elements, clear code

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans. The Basic differences between preventDefault() and stopPropagation is preventDefault() stops default browser behavior and stopPropagation() Stops event bubbling
