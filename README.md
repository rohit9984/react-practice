# React Practice

Learning React.js through examples, exercises, and mini projects using Vite.

## Technologies Used

- React
- Vite
- JavaScript
- HTML
- CSS

## Purpose

This repository contains my React learning projects and practice code.

 ======================07/9/2026============== 

 ========= How does React Work ===============

React is a javaScript library that use for create and update efficiently UI (User Interface)

User Action
     ↓
State / Data Change
     ↓
React Component Re-render
     ↓
New Virtual DOM
     ↓
Old Virtual DOM se Compare
     ↓
Difference Find
     ↓
Real DOM Update
     ↓
Updated UI on Screen

============= 1. Component =================


function App() {
  return <h1>Hello Rohit</h1>;
}

# App is a component
React divided React Application in reusable component.

# Mean of Render => process the react component and prepare output of UI/ display UI

# React use XML for create UI

================= Upgrade React ====================

# Upgrading an existing React application to version 19 only requires two steps.

# If you are already using the latest version of React, you can skip this section.

# Step 1: 
Run it in Project Folder to install the latest version

npm i react@latest react-dom@latest

# Step 2: 
In order to take advantage of React 19's concurrent features you'll need to use the new root API for client rendering.

// Before
<!-- import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello React!</h1>,
  document.getElementById('root')
); -->

// After
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <h1>Hello React!</h1>
);

==================================== React JSX =========================

# What is JSX?

JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.

# JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

# Without JSX — Normal JavaScript

Suppose we want to show this on the webpage:

<h1>Hello Rohit</h1>

# In normal JavaScript, we would write:

const heading = document.createElement("h1");

heading.textContent = "Hello Rohit";

document.body.appendChild(heading);

# Here:

createElement("h1") → <h1> element banaya
textContent → usme "Hello Rohit" dala
appendChild() → element ko webpage ke DOM mein add kiya

# 2. With JSX — React

React mein hum directly HTML-jaisa code likh sakte hain:
<!-- 
function App() {
  return (
    <h1>Hello Rohit</h1>
  );
} -->

export default App;

Yahan:
<!-- 
<h1>Hello Rohit</h1> -->

================= React JSX Expressions=============

A JavaScript expression is a piece of code that produces or gives a value.

# Expression = Code jo koi value/result deta hai.

# You can insert any valid JavaScript expression inside JSX by wrapping it in curly braces { }.

# Example
<!-- 
function Car() {
  return (
    <>
      <h1>My car</h1>
      <p>It has {218 * 1.36} horsepower</p>
    </>
  );
} -->

===================== Variable =====================

# Variables are also valid expressions. Insert variables in JSX by wrapping it in curly braces { }.

# Example 
<!-- 
function Car() {
  const hp = 218 * 1.36;
  return (
    <>
      <h1>My car</h1>
      <p>It has {hp} horsepower</p>
    </>
  );
} -->

=================== Function Calls =================

# Function calls are valid expressions. Insert function calls in JSX by wrapping it in curly braces { }.

# Example
<!-- 
function kwtohp(kw) {
  return kw * 1.36;
}

function Car() {
  return (
    <>
      <h1>My car</h1>
      <p>It has {kwtohp(218)} horsepower</p>
    </>
  );
} -->

==================== Object Properties =============

# Access object properties within JSX:

# Example
<!-- 
function Car() {
  const myobj = {
    name: "Fiat",
    model: "500",
    color: "white"
  };
  return (
    <>
      <h1>My car is a {myobj.color} {myobj.name} {myobj.model}</h1>
    </>
  );
} -->

==================== React JSX Attributes ==========

# Use attribute className instead of class in JSX:

# Example 
<!-- 
function Car() {
  return (
    <h1 className="myclass">Hello World</h1>
  );
} -->

# Expressions as Attributes

# Example
<!-- 
function Car() {
  const x = "myclass";
  return (
    <h1 className={x}>Hello World</h1>
  );
} -->

# camelCase Event Attributes

# Event attributes in JSX are written in camelCase.

# Example

<!-- function Car() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc}>Click me</button>
  );
} -->

# Boolean Attributes

# If you pass no value for an attribute, JSX treats it as true. To pass false, you must specify it as an expression.

# Example

Boolean true in JSX, this will make the button disabled:

<!-- <button onClick={myfunc} disabled>Click me</button> -->

Also true in JSX, this will also make the button disabled:

<!-- <button onClick={myfunc} disabled={true}>Click me</button> -->

False in JSX, this will NOT make the button disabled:
<!-- 
<button onClick={myfunc} disabled={false}>Click me</button> -->

============ The style Attribute =====

# The style attribute in JSX only accepts a JavaScript object with camelCased CSS property names, rather than a CSS string (as in HTML).
<!-- 
function Car() {
  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

  return (
    <>
      <h1 style={mystyles}>My car</h1>
    </>
  );
} -->

# Notice

The styles are stored in an object.
Style properties are written in camelCase, e.g. fontSize, instead of font-size.


======================= React JSX If Statements ====================

# Conditions - if statements

React supports if statements, but not inside JSX.

To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:

# Example

Write "Banana" if x is less than 10, otherwise "Apple":

# Option 1
<!-- 
function Fruit() {
  const x = 5;
  let y = "Apple";
  if (x < 10) {
    y = "Banana";
  }

  return (
    <h1>{y}</h1>
  );
} -->

# Option 2:
Use ternary expressions instead:

# Example
Write "Banana" if x is less than 10, otherwise "Apple":

<!-- function Fruit() {
  const x = 5;
  return (
    <h1>{(x) < 10 ? "Banana" : "Apple"}</h1>
  );
} -->

========================== Props ==========================
Props stands for Properties.

Props are used to pass data from a parent component to a child component.

Think of props like arguments passed to a function.

Simple Example
function App() {
  return <User name="Rohit" age={20} />;
}

function User(props) {
  return (
    <h1>
      My name is {props.name} and my age is {props.age}
    </h1>
  );
}

Here:

App (Parent)
   |
   | name="Rohit"
   | age={20}
   ↓
User (Child)

The User component receives the data through props.

Output
My name is Rohit and my age is 20
🎯 Why do we use Props?
1. Pass data between components
<User name="Rohit" />

The parent sends "Rohit" to the child.

2. Make components reusable

Instead of creating separate components:

<User name="Rohit" />
<User name="Amit" />
<User name="Neha" />

The same User component can display different data.

3. Pass different types of data

Props can contain:

<User
  name="Rohit"
  age={20}
  isStudent={true}
  skills={["HTML", "CSS", "React"]}
/>

You can pass strings, numbers, booleans, arrays, objects, functions, and even other React elements.

4. Pass functions from parent to child
function App() {
  const showMessage = () => {
    alert("Hello Rohit");
  };

  return <Child onClick={showMessage} />;
}

function Child(props) {
  return <button onClick={props.onClick}>Click</button>;
}


============================ React Destructuring Props =================

## What is Props Destructuring?

**Props Destructuring** ka matlab hai `props` object ke andar se required values ko **directly nikal kar use karna**.

Isse code **short, clean aur easy to understand** ho jata hai.

---

## 🔹 Normal Props

Sabse pehle parent component se props bhejte hain:

```jsx
function App() {
  return <User name="Rohit" age={20} />;
}
```

Child component mein hum normally `props.name` aur `props.age` se values access karte hain:

```jsx
function User(props) {
  return (
    <h1>
      My name is {props.name} and my age is {props.age}
    </h1>
  );
}
```

Yahan:

```text
props.name → Rohit
props.age  → 20
```

---

# 🔹 Props Destructuring

Hum `props` se values ko directly nikal sakte hain:

```jsx
function User({ name, age }) {
  return (
    <h1>
      My name is {name} and my age is {age}
    </h1>
  );
}
```

Yahan:

```jsx
{ name, age }
```

ka matlab hai:

> `props` object se `name` aur `age` properties ko directly nikal lo.

---

## 🔍 Ye kaise work karta hai?

Jab hum parent se ye props bhejte hain:

```jsx
<User name="Rohit" age={20} />
```

To props roughly aise hote hain:

```javascript
{
  name: "Rohit",
  age: 20
}
```

Normal way:

```jsx
function User(props) {
  console.log(props.name);
  console.log(props.age);
}
```

Destructuring way:

```jsx
function User({ name, age }) {
  console.log(name);
  console.log(age);
}
```

Dono ka result same hai.

---

# 🧠 Why do we use `{}`?

```jsx
function User({ name, age }) {
```

Yahan `{}` **JavaScript Object Destructuring** ke liye use hote hain.

Ye roughly iske equal hai:

```javascript
const { name, age } = props;
```

Isliye hum directly `name` aur `age` use kar sakte hain.

---

# 📌 Complete Example

```jsx
function App() {
  return (
    <User
      name="Rohit"
      age={20}
      course="BCA"
    />
  );
}

function User({ name, age, course }) {
  return (
    <div>
      <h2>My name is {name}</h2>
      <p>My age is {age}</p>
      <p>My course is {course}</p>
    </div>
  );
}

export default App;
```

### Output

```text
My name is Rohit
My age is 20
My course is BCA
```

---

# 🔄 Normal Props vs Destructuring

### Without Destructuring

```jsx
function User(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
    </div>
  );
}
```

### With Destructuring

```jsx
function User({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
}
```

### Main Difference

```text
Without Destructuring
        ↓
props.name
props.age

With Destructuring
        ↓
name
age
```

---

# 🎯 Advantages of Props Destructuring

* Code **short** hota hai.
* Code **clean** hota hai.
* Code **easy to read** hota hai.
* Required props ko directly use kar sakte hain.
* Large components mein code manage karna easier hota hai.

---

## ⭐ Easy Definition

> **Props Destructuring means props object se required properties ko directly variables ke form mein extract karke use karna.**

### Remember

```jsx
function User(props)
```

➡️ Normal Props

```jsx
function User({ name, age })
```

➡️ Destructuring Props

```text
{} → Object Destructuring
```


==================== React Inline Style `{{}}` =======================

React mein inline CSS likhte time double `{}` use hote hain:

```jsx
<div style={{ background: "lightblue" }}>
  Hello Rohit
</div>
```

### Why Double `{}`?

* **Outer `{}`** → JSX ke andar JavaScript expression likhne ke liye.
* **Inner `{}`** → CSS styles ko JavaScript **object** ke form mein dene ke liye.

```jsx
style={{ background: "lightblue" }}
     ↑
  JavaScript
  expression

        ↑
   Style object
```

### Simple Example

```jsx
const myStyle = {
  background: "lightblue",
  color: "black"
};

return <div style={myStyle}>Hello</div>;
```

Yahan `myStyle` already ek object hai, isliye:

```jsx
style={myStyle}
```

use karte hain.

> **Remember:** Outer `{}` = JavaScript, Inner `{}` = Object.


======================= React Props Children ===========================

`props.children` ka use **parent component ke andar likhe content ko child component mein display karne** ke liye hota hai.

### Example

```jsx
function Son(props) {
  return (
    <div>
      <h2>Son</h2>
      {props.children}
    </div>
  );
}

function Parent() {
  return (
    <Son>
      <p>Hello from </p>
    </Son>
  );
}
```

### How it works?

```text
Parent
  ↓
<Son>
  <p>Hello from Parent</p>
</Son>
  ↓
props.children
  ↓
<p>Hello from Parent</p>
```

So, `props.children` mein **`<Son>...</Son>`**** ke andar ka content** aa jata hai.

### Easy Definition

> **`props.children`**** = Parent component ke child component ke andar pass kiya gaya content.**

It makes components more **flexible and reusable**.

# ⚛️ React Events

**React Events** ka use user ke actions ko handle karne ke liye hota hai, jaise:

* Button click
* Input mein typing
* Mouse move
* Form submit

React mein event names **camelCase** mein likhe jaate hain.

### Example

```jsx
function App() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

### Important

HTML mein:

```html
<button onclick="handleClick()">
```

React mein:

```jsx
<button onClick={handleClick}>
```

React mein function ko event handler ke roop mein pass karte hain.

### Event Handler

Event handler ek function hota hai jo user action hone par execute hota hai.

```jsx
const handleClick = () => {
  alert("Hello Rohit");
};
```

Then:

```jsx
<button onClick={handleClick}>
  Click
</button>
```

### ⚠️ Important Difference

```jsx
onClick={handleClick}      // ✅ Correct
onClick={handleClick()}    // ❌ Usually incorrect
```

`onClick={handleClick}` mein function **click hone par** call hota hai.

### Easy Definition

> **React Events = User ke actions ko detect karke unke according function/action perform karna.**

======================= React Conditional Rendering ==================================

**Conditional Rendering** ka matlab hai **condition ke according UI ko show karna**.

React mein mainly ye methods use hote hain:

* `if` Statement
* Logical `&&` Operator
* Ternary Operator

---

## 1. `if` Statement

`if` ka use condition check karke **different UI return** karne ke liye hota hai.

```jsx
function User({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome Rohit!</h2>;
  }

  return <h2>Please Login</h2>;
}
```

```jsx
<User isLoggedIn={true} />
```

**Output:**

```text
Welcome Rohit!
```

---

## 2. Logical `&&` Operator

`&&` ka use tab hota hai jab condition `true` hone par **kuch display karna ho**.

```jsx
function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn && <h2>Welcome Rohit!</h2>}
    </div>
  );
}
```

Agar `isLoggedIn` `true` hai → message show hoga.

Agar `false` hai → kuch show nahi hoga.

### Syntax

```jsx
{condition && <Element />}
```

---

## 3. Ternary Operator

Ternary operator ka use **condition ke basis par do options mein se ek UI show** karne ke liye hota hai.

### Syntax

```jsx
condition ? valueIfTrue : valueIfFalse
```

### Example

```jsx
function App() {
  const isLoggedIn = true;

  return (
    <h2>
      {isLoggedIn ? "Welcome Rohit!" : "Please Login"}
    </h2>
  );
}
```

Agar condition `true`:

```text
Welcome Rohit!
```

Agar condition `false`:

```text
Please Login
```

---

## 🧠 Quick Revision

| Method | Use                                                     |
| ------ | ------------------------------------------------------- |
| `if`   | Different UI return karna                               |
| `&&`   | Condition true hone par UI show karna                   |
| `? :`  | True/False ke according 2 options mein se ek show karna |

### Easy Trick

```text
if       → condition check → return UI
&&       → true → show UI
ternary  → true/false → one of two UI
```


+++++++++++++++ Routing ++++++++++++++++++++++

Routing Setup

What is the Routing

# Routing is the processe in which we convert every component into web pages by making link

Routing Setup

npm install react-router-dom

https://v5.reactrouter.com/web/example/basic
