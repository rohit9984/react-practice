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
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello React!</h1>,
  document.getElementById('root')
);

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

function App() {
  return (
    <h1>Hello Rohit</h1>
  );
}

export default App;

Yahan:

<h1>Hello Rohit</h1>

================= React JSX Expressions=============

A JavaScript expression is a piece of code that produces or gives a value.

# Expression = Code jo koi value/result deta hai.

# You can insert any valid JavaScript expression inside JSX by wrapping it in curly braces { }.

# Example

function Car() {
  return (
    <>
      <h1>My car</h1>
      <p>It has {218 * 1.36} horsepower</p>
    </>
  );
}

===================== Variable =====================

# Variables are also valid expressions. Insert variables in JSX by wrapping it in curly braces { }.

# Example 

function Car() {
  const hp = 218 * 1.36;
  return (
    <>
      <h1>My car</h1>
      <p>It has {hp} horsepower</p>
    </>
  );
}

=================== Function Calls =================

# Function calls are valid expressions. Insert function calls in JSX by wrapping it in curly braces { }.

# Example

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
}

==================== Object Properties =============

# Access object properties within JSX:

# Example

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
}

==================== React JSX Attributes ==========

# Use attribute className instead of class in JSX:

# Example 

function Car() {
  return (
    <h1 className="myclass">Hello World</h1>
  );
}

# Expressions as Attributes

# Example

function Car() {
  const x = "myclass";
  return (
    <h1 className={x}>Hello World</h1>
  );
}

# camelCase Event Attributes

# Event attributes in JSX are written in camelCase.

# Example

function Car() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc}>Click me</button>
  );
}

# Boolean Attributes

# If you pass no value for an attribute, JSX treats it as true. To pass false, you must specify it as an expression.

# Example

Boolean true in JSX, this will make the button disabled:

<button onClick={myfunc} disabled>Click me</button>

Also true in JSX, this will also make the button disabled:

<button onClick={myfunc} disabled={true}>Click me</button>

False in JSX, this will NOT make the button disabled:

<button onClick={myfunc} disabled={false}>Click me</button>

============ The style Attribute =====

# The style attribute in JSX only accepts a JavaScript object with camelCased CSS property names, rather than a CSS string (as in HTML).

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
}

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

function Fruit() {
  const x = 5;
  let y = "Apple";
  if (x < 10) {
    y = "Banana";
  }

  return (
    <h1>{y}</h1>
  );
}

# Option 2:
Use ternary expressions instead:

# Example
Write "Banana" if x is less than 10, otherwise "Apple":

function Fruit() {
  const x = 5;
  return (
    <h1>{(x) < 10 ? "Banana" : "Apple"}</h1>
  );
}