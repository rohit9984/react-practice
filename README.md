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









