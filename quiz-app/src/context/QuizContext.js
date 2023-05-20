import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

function Provider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = {
    ReactJs: [
      {
        "id": 1,
        "question": "What is JSX?",
        "answers": [
          { "answer": "JavaScript XML", "trueAnswer": true },
          { "answer": "Java Syntax Extension", "trueAnswer": false },
          { "answer": "JavaScript Extension", "trueAnswer": false },
          { "answer": "JavaScript Markup Language", "trueAnswer": false }
        ]
      },
      {
        "id": 2,
        "question": "What is a state in React?",
        "answers": [
          { "answer": "An object that holds component data", "trueAnswer": true },
          { "answer": "A function that returns JSX", "trueAnswer": false },
          { "answer": "A reusable component", "trueAnswer": false },
          { "answer": "A styling library in React", "trueAnswer": false }
        ]
      },
      {
        "id": 3,
        "question": "What is a prop in React?",
        "answers": [
          { "answer": "Data passed from a parent component to a child component", "trueAnswer": true },
          { "answer": "A method used to update component state", "trueAnswer": false },
          { "answer": "A callback function in React", "trueAnswer": false },
          { "answer": "A CSS-in-JS solution in React", "trueAnswer": false }
        ]
      },
      {
        "id": 4,
        "question": "What is the purpose of componentDidMount() in React?",
        "answers": [
          { "answer": "To perform actions after the component has been rendered", "trueAnswer": true },
          { "answer": "To handle component errors", "trueAnswer": false },
          { "answer": "To handle form submissions in React", "trueAnswer": false },
          { "answer": "To define the initial state of a component", "trueAnswer": false }
        ]
      },
      {
        "id": 5,
        "question": "What is the virtual DOM in React?",
        "answers": [
          { "answer": "A lightweight representation of the actual DOM", "trueAnswer": true },
          { "answer": "A component in React that does not render anything", "trueAnswer": false },
          { "answer": "A React feature used for routing", "trueAnswer": false },
          { "answer": "A React hook for managing side effects", "trueAnswer": false }
        ]
      },
      {
        "id": 6,
        "question": "What is the purpose of the render() method in React?",
        "answers": [
          { "answer": "To return the JSX to be rendered", "trueAnswer": true },
          { "answer": "To define component lifecycle methods", "trueAnswer": false },
          { "answer": "To handle user interactions in React", "trueAnswer": false },
          { "answer": "To handle asynchronous operations in React", "trueAnswer": false }
        ]
      },
      {
        "id": 7,
        "question": "What is the role of keys in React lists?",
        "answers": [
          { "answer": "To provide a unique identifier to list items", "trueAnswer": true },
          { "answer": "To handle events in React", "trueAnswer": false },
          { "answer": "To define CSS classes for list items", "trueAnswer": false },
          { "answer": "To control the visibility of list items", "trueAnswer": false }
        ]
      },
      {
        "id": 8,
        "question": "What is the purpose of useState() hook in React?",
        "answers": [
          { "answer": "To add stateful logic to functional components", "trueAnswer": true },
          { "answer": "To define props for a component", "trueAnswer": false },
          { "answer": "To create reusable custom hooks", "trueAnswer": false },
          { "answer": "To handle component lifecycle methods", "trueAnswer": false }
        ]
      },
      {
        "id": 9,
        "question": "What is the significance of the shouldComponentUpdate() method in React?",
        "answers": [
          { "answer": "To optimize performance by controlling component re-rendering", "trueAnswer": true },
          { "answer": "To handle errors in React components", "trueAnswer": false },
          { "answer": "To define the initial state of a component", "trueAnswer": false },
          { "answer": "To handle user interactions in React", "trueAnswer": false }
        ]
      },
      {
        "id": 10,
        "question": "What is a React fragment?",
        "answers": [
          { "answer": "A lightweight syntax for rendering multiple elements without a wrapper", "trueAnswer": true },
          { "answer": "A component used for form validation in React", "trueAnswer": false },
          { "answer": "A built-in React hook for managing side effects", "trueAnswer": false },
          { "answer": "A CSS-in-JS solution in React", "trueAnswer": false }
        ]
      }
    ],
    HTML: [
      {
        "id": 1,
        "question": "What does HTML stand for?",
        "answers": [
          { "answer": "HyperText Markup Language", "trueAnswer": true },
          { "answer": "Home Tool Markup Language", "trueAnswer": false },
          { "answer": "Hyper Tool Markup Language", "trueAnswer": false },
          { "answer": "Hyperlink Text Markup Language", "trueAnswer": false }
        ]
      },
      {
        "id": 2,
        "question": "Which tag is used to define a hyperlink in HTML?",
        "answers": [
          { "answer": "<a>", "trueAnswer": true },
          { "answer": "<p>", "trueAnswer": false },
          { "answer": "<h1>", "trueAnswer": false },
          { "answer": "<div>", "trueAnswer": false }
        ]
      },
      {
        "id": 3,
        "question": "What is the correct HTML element for the largest heading?",
        "answers": [
          { "answer": "<h1>", "trueAnswer": true },
          { "answer": "<h2>", "trueAnswer": false },
          { "answer": "<h3>", "trueAnswer": false },
          { "answer": "<h4>", "trueAnswer": false }
        ]
      },
      {
        "id": 4,
        "question": "Which attribute is used to specify an alternate text for an image in HTML?",
        "answers": [
          { "answer": "alt", "trueAnswer": true },
          { "answer": "src", "trueAnswer": false },
          { "answer": "href", "trueAnswer": false },
          { "answer": "title", "trueAnswer": false }
        ]
      },
      {
        "id": 5,
        "question": "Which tag is used to define an unordered list in HTML?",
        "answers": [
          { "answer": "<ul>", "trueAnswer": true },
          { "answer": "<ol>", "trueAnswer": false },
          { "answer": "<li>", "trueAnswer": false },
          { "answer": "<div>", "trueAnswer": false }
        ]
      },
      {
        "id": 6,
        "question": "What is the correct HTML element for inserting a line break?",
        "answers": [
          { "answer": "<br>", "trueAnswer": true },
          { "answer": "<hr>", "trueAnswer": false },
          { "answer": "<p>", "trueAnswer": false },
          { "answer": "<span>", "trueAnswer": false }
        ]
      },
      {
        "id": 7,
        "question": "Which attribute is used to define inline styles in HTML?",
        "answers": [
          { "answer": "style", "trueAnswer": true },
          { "answer": "class", "trueAnswer": false },
          { "answer": "src", "trueAnswer": false },
          { "answer": "id", "trueAnswer": false }
        ]
      },
      {
        "id": 8,
        "question": "What is the correct HTML element for playing audio files?",
        "answers": [
          { "answer": "<audio>", "trueAnswer": true },
          { "answer": "<video>", "trueAnswer": false },
          { "answer": "<sound>", "trueAnswer": false },
          { "answer": "<mp3>", "trueAnswer": false }
        ]
      },
      {
        "id": 9,
        "question": "Which tag is used to define a table in HTML?",
        "answers": [
          { "answer": "<table>", "trueAnswer": true },
          { "answer": "<div>", "trueAnswer": false },
          { "answer": "<ul>", "trueAnswer": false },
          { "answer": "<form>", "trueAnswer": false }
        ]
      },
      {
        "id": 10,
        "question": "What is the correct HTML element for creating a checkbox?",
        "answers": [
          { "answer": "<input type='checkbox'>", "trueAnswer": true },
          { "answer": "<select>", "trueAnswer": false },
          { "answer": "<radio>", "trueAnswer": false },
          { "answer": "<label>", "trueAnswer": false }
        ]
      }
    ],
    CSS: [
      {
        "id": 1,
        "question": "Which CSS property is used to change the text color of an element?",
        "answers": [
          { "answer": "color", "trueAnswer": true },
          { "answer": "font-size", "trueAnswer": false },
          { "answer": "background-color", "trueAnswer": false },
          { "answer": "text-align", "trueAnswer": false }
        ]
      },
      {
        "id": 2,
        "question": "Which CSS property is used to add spacing between letters in a text?",
        "answers": [
          { "answer": "letter-spacing", "trueAnswer": true },
          { "answer": "line-height", "trueAnswer": false },
          { "answer": "text-indent", "trueAnswer": false },
          { "answer": "text-transform", "trueAnswer": false }
        ]
      },
      {
        "id": 3,
        "question": "Which CSS property is used to set the height of an element?",
        "answers": [
          { "answer": "height", "trueAnswer": true },
          { "answer": "width", "trueAnswer": false },
          { "answer": "padding", "trueAnswer": false },
          { "answer": "margin", "trueAnswer": false }
        ]
      },
      {
        "id": 4,
        "question": "Which CSS property is used to control the order of the elements in a flex container?",
        "answers": [
          { "answer": "order", "trueAnswer": true },
          { "answer": "flex-direction", "trueAnswer": false },
          { "answer": "align-items", "trueAnswer": false },
          { "answer": "justify-content", "trueAnswer": false }
        ]
      },
      {
        "id": 5,
        "question": "Which CSS property is used to add a shadow effect to an element?",
        "answers": [
          { "answer": "box-shadow", "trueAnswer": true },
          { "answer": "text-shadow", "trueAnswer": false },
          { "answer": "background-color", "trueAnswer": false },
          { "answer": "border-radius", "trueAnswer": false }
        ]
      },
      {
        "id": 6,
        "question": "Which CSS property is used to create rounded corners on an element?",
        "answers": [
          { "answer": "border-radius", "trueAnswer": true },
          { "answer": "border-width", "trueAnswer": false },
          { "answer": "margin", "trueAnswer": false },
          { "answer": "padding", "trueAnswer": false }
        ]
      },
      {
        "id": 7,
        "question": "Which CSS property is used to set the background image of an element?",
        "answers": [
          { "answer": "background-image", "trueAnswer": true },
          { "answer": "background-color", "trueAnswer": false },
          { "answer": "border-image", "trueAnswer": false },
          { "answer": "background-position", "trueAnswer": false }
        ]
      },
      {
        "id": 8,
        "question": "Which CSS property is used to control the spacing between lines of text?",
        "answers": [
          { "answer": "line-height", "trueAnswer": true },
          { "answer": "letter-spacing", "trueAnswer": false },
          { "answer": "text-indent", "trueAnswer": false },
          { "answer": "text-transform", "trueAnswer": false }
        ]
      },
      {
        "id": 9,
        "question": "Which CSS property is used to specify the font family of an element?",
        "answers": [
          { "answer": "font-family", "trueAnswer": true },
          { "answer": "font-size", "trueAnswer": false },
          { "answer": "text-decoration", "trueAnswer": false },
          { "answer": "font-weight", "trueAnswer": false }
        ]
      },
      {
        "id": 10,
        "question": "Which CSS property is used to make an element take up the full height and width of its parent?",
        "answers": [
          { "answer": "width: 100%; height: 100%;", "trueAnswer": true },
          { "answer": "display: block;", "trueAnswer": false },
          { "answer": "position: absolute;", "trueAnswer": false },
          { "answer": "float: none;", "trueAnswer": false }
        ]
      }
    ],
    JavaScript: [
      {
        "id": 1,
        "question": "What is the correct way to declare a variable in JavaScript?",
        "answers": [
          { "answer": "var myVar;", "trueAnswer": true },
          { "answer": "variable myVar;", "trueAnswer": false },
          { "answer": "myVar = 10;", "trueAnswer": false },
          { "answer": "let myVar;", "trueAnswer": false }
        ]
      },
      {
        "id": 2,
        "question": "What is the result of the following expression: 5 + '2'?",
        "answers": [
          { "answer": "'52'", "trueAnswer": true },
          { "answer": "7", "trueAnswer": false },
          { "answer": "NaN", "trueAnswer": false },
          { "answer": "52", "trueAnswer": false }
        ]
      },
      {
        "id": 3,
        "question": "Which keyword is used to define a function in JavaScript?",
        "answers": [
          { "answer": "function", "trueAnswer": true },
          { "answer": "def", "trueAnswer": false },
          { "answer": "fun", "trueAnswer": false },
          { "answer": "void", "trueAnswer": false }
        ]
      },
      {
        "id": 4,
        "question": "What is the correct way to write a comment in JavaScript?",
        "answers": [
          { "answer": "// This is a comment", "trueAnswer": true },
          { "answer": "<!-- This is a comment -->", "trueAnswer": false },
          { "answer": "/* This is a comment */", "trueAnswer": false },
          { "answer": "# This is a comment", "trueAnswer": false }
        ]
      },
      {
        "id": 5,
        "question": "Which operator is used for strict equality comparison in JavaScript?",
        "answers": [
          { "answer": "===", "trueAnswer": true },
          { "answer": "==", "trueAnswer": false },
          { "answer": "=", "trueAnswer": false },
          { "answer": "!==", "trueAnswer": false }
        ]
      },
      {
        "id": 6,
        "question": "What is the output of the following code?\nconsole.log(2 + '2' - 1);",
        "answers": [
          { "answer": "21", "trueAnswer": true },
          { "answer": "3", "trueAnswer": false },
          { "answer": "22", "trueAnswer": false },
          { "answer": "NaN", "trueAnswer": false }
        ]
      },
      {
        "id": 7,
        "question": "Which method is used to add an element to the end of an array in JavaScript?",
        "answers": [
          { "answer": "push()", "trueAnswer": true },
          { "answer": "add()", "trueAnswer": false },
          { "answer": "append()", "trueAnswer": false },
          { "answer": "concat()", "trueAnswer": false }
        ]
      },
      {
        "id": 8,
        "question": "What is the result of the following expression: '5' == 5?",
        "answers": [
          { "answer": "true", "trueAnswer": true },
          { "answer": "false", "trueAnswer": false },
          { "answer": "NaN", "trueAnswer": false },
          { "answer": "undefined", "trueAnswer": false }
        ]
      },
      {
        "id": 9,
        "question": "Which method is used to remove the last element from an array in JavaScript?",
        "answers": [
          { "answer": "pop()", "trueAnswer": true },
          { "answer": "remove()", "trueAnswer": false },
          { "answer": "delete()", "trueAnswer": false },
          { "answer": "shift()", "trueAnswer": false }
        ]
      },
      {
        "id": 10,
        "question": "What is the output of the following code?\nconsole.log(typeof null);",
        "answers": [
          { "answer": "'object'", "trueAnswer": true },
          { "answer": "'null'", "trueAnswer": false },
          { "answer": "'undefined'", "trueAnswer": false },
          { "answer": "'string'", "trueAnswer": false }
        ]
      }, 
    ],
    NodeJs: [
      {
        "id": 1,
        "question": "What is Node.js?",
        "answers": [
          { "answer": "A server-side JavaScript runtime", "trueAnswer": true },
          { "answer": "A front-end development framework", "trueAnswer": false },
          { "answer": "A database management system", "trueAnswer": false },
          { "answer": "A programming language", "trueAnswer": false }
        ]
      },
      {
        "id": 2,
        "question": "Which package manager is commonly used in Node.js?",
        "answers": [
          { "answer": "npm", "trueAnswer": true },
          { "answer": "yarn", "trueAnswer": false },
          { "answer": "bower", "trueAnswer": false },
          { "answer": "pip", "trueAnswer": false }
        ]
      },
      {
        "id": 3,
        "question": "What is the command to install dependencies specified in a package.json file?",
        "answers": [
          { "answer": "npm install", "trueAnswer": true },
          { "answer": "npm init", "trueAnswer": false },
          { "answer": "npm run", "trueAnswer": false },
          { "answer": "npm start", "trueAnswer": false }
        ]
      },
      {
        "id": 4,
        "question": "Which module is commonly used for handling file operations in Node.js?",
        "answers": [
          { "answer": "fs", "trueAnswer": true },
          { "answer": "http", "trueAnswer": false },
          { "answer": "path", "trueAnswer": false },
          { "answer": "net", "trueAnswer": false }
        ]
      },
      {
        "id": 5,
        "question": "What is the purpose of the 'require' function in Node.js?",
        "answers": [
          { "answer": "To include modules", "trueAnswer": true },
          { "answer": "To define variables", "trueAnswer": false },
          { "answer": "To create classes", "trueAnswer": false },
          { "answer": "To handle errors", "trueAnswer": false }
        ]
      },
      {
        "id": 6,
        "question": "What is the default package.json file name in a Node.js project?",
        "answers": [
          { "answer": "package.json", "trueAnswer": true },
          { "answer": "config.json", "trueAnswer": false },
          { "answer": "manifest.json", "trueAnswer": false },
          { "answer": "node.json", "trueAnswer": false }
        ]
      },
      {
        "id": 7,
        "question": "Which event is emitted when an unhandled exception occurs in Node.js?",
        "answers": [
          { "answer": "uncaughtException", "trueAnswer": true },
          { "answer": "error", "trueAnswer": false },
          { "answer": "exception", "trueAnswer": false },
          { "answer": "fatalError", "trueAnswer": false }
        ]
      },
      {
        "id": 8,
        "question": "What is the purpose of the 'npm start' command in a Node.js project?",
        "answers": [
          { "answer": "To start the application using the 'start' script defined in the package.json file", "trueAnswer": true },
          { "answer": "To install all the dependencies specified in the package.json file", "trueAnswer": false },
          { "answer": "To run unit tests for the application", "trueAnswer": false },
          { "answer": "To stop the running Node.js process", "trueAnswer": false }
        ]
      },
      {
        "id": 9,
        "question": "Which module is commonly used for working with databases in Node.js?",
        "answers": [
          { "answer": "mongoose", "trueAnswer": true },
          { "answer": "express", "trueAnswer": false },
          { "answer": "sequelize", "trueAnswer": false },
          { "answer": "body-parser", "trueAnswer": false }
        ]
      },
      {
        "id": 10,
        "question": "What is the purpose of the 'require.resolve' function in Node.js?",
        "answers": [
          { "answer": "To get the path of a module without actually loading it", "trueAnswer": true },
          { "answer": "To check if a module is installed in the project", "trueAnswer": false },
          { "answer": "To resolve dependencies in the package.json file", "trueAnswer": false },
          { "answer": "To require a module asynchronously", "trueAnswer": false }
        ]
      }],
    Frontend: [
      {
        "id": 1,
        "question": "What does HTML stand for?",
        "answers": [
          { "answer": "Hyper Text Markup Language", "trueAnswer": true },
          { "answer": "Hyperlinks and Text Markup Language", "trueAnswer": false },
          { "answer": "Home Tool Markup Language", "trueAnswer": false },
          { "answer": "Hyper Transfer Markup Language", "trueAnswer": false }
        ]
      },
      {
        "id": 2,
        "question": "Which tag is used to define an unordered list in HTML?",
        "answers": [
          { "answer": "<ul>", "trueAnswer": true },
          { "answer": "<ol>", "trueAnswer": false },
          { "answer": "<li>", "trueAnswer": false },
          { "answer": "<dl>", "trueAnswer": false }
        ]
      },
      {
        "id": 3,
        "question": "Which CSS property is used to change the color of text?",
        "answers": [
          { "answer": "color", "trueAnswer": true },
          { "answer": "background-color", "trueAnswer": false },
          { "answer": "font-size", "trueAnswer": false },
          { "answer": "text-decoration", "trueAnswer": false }
        ]
      },
      {
        "id": 4,
        "question": "Which method is used to add an element at the end of an array in JavaScript?",
        "answers": [
          { "answer": "push()", "trueAnswer": true },
          { "answer": "pop()", "trueAnswer": false },
          { "answer": "shift()", "trueAnswer": false },
          { "answer": "unshift()", "trueAnswer": false }
        ]
      },
      {
        "id": 5,
        "question": "Which event is triggered when a user clicks on an HTML element?",
        "answers": [
          { "answer": "click", "trueAnswer": true },
          { "answer": "mouseover", "trueAnswer": false },
          { "answer": "keydown", "trueAnswer": false },
          { "answer": "submit", "trueAnswer": false }
        ]
      },
      {
        "id": 6,
        "question": "What is the default position value in CSS?",
        "answers": [
          { "answer": "static", "trueAnswer": true },
          { "answer": "relative", "trueAnswer": false },
          { "answer": "absolute", "trueAnswer": false },
          { "answer": "fixed", "trueAnswer": false }
        ]
      },
      {
        "id": 7,
        "question": "What is the correct way to declare a variable in JavaScript?",
        "answers": [
          { "answer": "var myVariable;", "trueAnswer": true },
          { "answer": "variable myVariable;", "trueAnswer": false },
          { "answer": "let myVariable;", "trueAnswer": false },
          { "answer": "const myVariable;", "trueAnswer": false }
        ]
      },
      {
        "id": 8,
        "question": "What is the purpose of the 'DOMContentLoaded' event in JavaScript?",
        "answers": [
          { "answer": "It is triggered when the HTML document has been completely loaded and parsed.", "trueAnswer": true },
          { "answer": "It is triggered when the user clicks on an element.", "trueAnswer": false },
          { "answer": "It is triggered when an AJAX request is completed.", "trueAnswer": false },
          { "answer": "It is triggered when an error occurs during script execution.", "trueAnswer": false }
        ]
      },
      {
        "id": 9,
        "question": "Which HTML tag is used to link an external CSS file?",
        "answers": [
          { "answer": "<link>", "trueAnswer": true },
          { "answer": "<style>", "trueAnswer": false },
          { "answer": "<script>", "trueAnswer": false },
          { "answer": "<head>", "trueAnswer": false }
        ]
      },
      {
        "id": 10,
        "question": "What is the purpose of the 'querySelector()' method in JavaScript?",
        "answers": [
          { "answer": "It is used to select the first element that matches a specified CSS selector.", "trueAnswer": true },
          { "answer": "It is used to add a new element to the HTML document.", "trueAnswer": false },
          { "answer": "It is used to remove an element from the HTML document.", "trueAnswer": false },
          { "answer": "It is used to change the text content of an element.", "trueAnswer": false }
        ]
      }
    ],
  };

  const sharedValuesAndMethods = {
    questions,
    currentQuestion,
    setCurrentQuestion,
  };

  return (
    <QuizContext.Provider value={sharedValuesAndMethods}>
      {children}
    </QuizContext.Provider>
  );
}

const useQuizContext = () => useContext(QuizContext);
export { Provider, useQuizContext };
export default QuizContext;