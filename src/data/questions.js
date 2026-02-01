const questions = {
    javascript: [
        {
            question: "What is a closure in JavaScript?",
            options: ["Programming Language", "Database", "OS", "Browser"],
            answer: "Programming Language"
        },
        {
            question: "What is the output of 'typeof null' in JavaScript?",
            options: ["object", "null", "undefined", "boolean"],
            answer: "object"
        },
        {
            question: "Which method is used to add an element at the end of an array in JavaScript?",
            options: [".push()", ".pop()", ".shift()", ".unshift()"],
            answer: ".push()"
        },
        {
            question: "What is the purpose of the 'this' keyword in JavaScript?",
            options: ["Refers to the current object", "Refers to a function", "Refers to a variable", "Refers to a class"],
            answer: "Refers to the current object"
        },
        {
            question: "Which of the following is NOT a JavaScript data type?",
            options: ["String", "Number", "Boolean", "Character"],
            answer: "Character"
        },
        {
            question: "What is the difference between '==' and '===' in JavaScript?",
            options: ["No difference", "'==' checks value, '===' checks value and type", "'==' checks type, '===' checks value", "Both check type only"],
            answer: "'==' checks value, '===' checks value and type"
        },
        {
            question: "Which built-in method is used to convert a JSON string to a JavaScript object?",
            options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
            answer: "JSON.parse()"
        },
        {
            question: "What is the output of '2' + 2 in JavaScript?",
            options: ["4", "'22'", "NaN", "Error"],
            answer: "'22'"
        },
        {
            question: "Which of the following is a way to create a function in JavaScript?",
            options: ["Function Declaration", "Function Expression", "Arrow Function", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "What does the 'async' keyword do in JavaScript?",
            options: ["Makes a function return a promise", "Makes a function synchronous", "Makes a function faster", "None of the above"],
            answer: "Makes a function return a promise"
        }
    ],
    java: [
        {
            question: "What is the main feature of Java that makes it platform-independent?",
            options: ["Java Virtual Machine (JVM)", "Just-In-Time Compiler", "Java Development Kit (JDK)", "Java Runtime Environment (JRE)"],
            answer: "Java Virtual Machine (JVM)"
        },
        {
            question: "Which of the following is NOT a valid access modifier in Java?",
            options: ["public", "private", "protected", "internal"],
            answer: "internal"
        },
        {
            question: "What is the purpose of the 'final' keyword in Java?",
            options: ["To declare a constant variable", "To prevent method overriding", "To prevent class inheritance", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "Which data type is used to represent decimal numbers in Java?",
            options: ["int", "float", "double", "long"],
            answer: "double"
        },
        {
            question: "What is the default value of a boolean variable in Java?",
            options: ["true", "false", "0", "null"],
            answer: "false"
        }, {
            question: "Which of the following is NOT a Java collection framework interface?",
            options: ["List", "Set", "Map", "Array"],
            answer: "Array"
        },
        {
            question: "What is the purpose of the 'static' keyword in Java?",
            options: ["To create instance variables", "To create class-level variables and methods", "To create abstract classes", "To create interfaces"],
            answer: "To create class-level variables and methods"
        },
        {
            question: "Which exception is thrown when a method is called on a null object reference in Java?",
            options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "ClassNotFoundException", "IllegalArgumentException"],
            answer: "NullPointerException"
        },
        {
            question: "What is the size of an int data type in Java?",
            options: ["8 bits", "16 bits", "32 bits", "64 bits"],
            answer: "32 bits"
        },
        {
            question: "Which keyword is used to inherit a class in Java?",
            options: ["extends", "implements", "inherits", "super"],
            answer: "extends"
        }
    ],
    html: [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Marking Language"],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Which HTML tag is used to create a hyperlink?",
            options: ["<a>", "<link>", "<href>", "<hyperlink>"],
            answer: "<a>"
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            options: ["<break>", "<lb>", "<br>", "<linebreak>"],
            answer: "<br>"
        },
        {
            question: "Which attribute is used to specify an image's alternative text in HTML?",
            options: ["alt", "src", "title", "href"],
            answer: "alt"
        },
        {
            question: "What is the purpose of the <head> section in an HTML document?",
            options: ["To contain metadata and links to external resources", "To display the main content of the webpage", "To create a footer for the webpage", "To define the body of the document"],
            answer: "To contain metadata and links to external resources"
        },
        {
            question: "Which HTML tag is used to create a table row?",
            options: ["<tr>", "<td>", "<th>", "<table>"],
            answer: "<tr>"
        },
        {
            question: "What is the correct HTML element for defining the largest heading?",
            options: ["<h1>", "<h6>", "<heading>", "<head>"],
            answer: "<h1>"
        },
        {
            question: "Which attribute is used to specify the URL of a link in HTML?",
            options: ["href", "src", "link", "url"],
            answer: "href"
        },
        {
            question: "What is the purpose of the <form> element in HTML?",
            options: ["To create a form for user input", "To define a section of the document", "To insert an image", "To create a list"],
            answer: "To create a form for user input"
        },
        {
            question: "Which HTML tag is used to create an unordered list?",
            options: ["<ul>", "<ol>", "<li>", "<list>"],
            answer: "<ul>"
        }
    ],
    css: [
        {
            question: "What does CSS stand for?",
            options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
            answer: "Cascading Style Sheets"
        },
        {
            question: "Which property is used to change the background color of an element in CSS?",
            options: ["background-color", "color", "bgcolor", "background"],
            answer: "background-color"
        },
        {
            question: "How do you select an element with the id 'header' in CSS?",
            options: ["#header", ".header", "header", "*header"],
            answer: "#header"
        },
        {
            question: "Which CSS property is used to change the text color of an element?",
            options: ["text-color", "color", "font-color", "text-style"],
            answer: "color"
        },
        {
            question: "What is the correct syntax to link an external CSS file in HTML?",
            options: ['<link rel="stylesheet" href="styles.css">', '<style src="styles.css">', '<css link="styles.css">', '<stylesheet href="styles.css">'],
            answer: '<link rel="stylesheet" href="styles.css">'
        },
        {
            question: "Which CSS property is used to change the font size of an element?",
            options: ["font-size", "text-size", "font-style", "text-style"],
            answer: "font-size"
        },
        {
            question: "How do you make a list that lists its items with squares in CSS?",
            options: ["list-style-type: square;", "list-type: square;", "list-style: square;", "list-type-style: square;"],
            answer: "list-style-type: square;"
        },
        {
            question: "Which CSS property is used to change the spacing between lines of text?",
            options: ["line-height", "text-spacing", "letter-spacing", "word-spacing"],
            answer: "line-height"
        },
        {
            question: "What is the correct CSS syntax to make all <p> elements have a font size of 16 pixels?",
            options: ["p {font-size: 16px;}", "p {text-size: 16px;}", "p {font: 16px;}", "p {text: 16px;}"],
            answer: "p {font-size: 16px;}"
        },
        {
            question: "Which CSS property is used to add space inside an element, between the content and the border?",
            options: ["padding", "margin", "border-spacing", "content-spacing"],
            answer: "padding"
        }
    ],
    puzzles: [
        {
            question: "I am an odd number. Take away one letter and I become even. What number am I?",
            options: [5, 7, 11, 9],
            answer: 7
        },
        {
            question: "Which number has the same number of letters as its value?",
            options: [4, 3, 5, 6],
            answer: 4
        },
        {
            question: "What comes next? 1, 4, 9, 16, ?",
            options: [20, 24, 25, 30],
            answer: 25
        },
        {
            question: "If 3 cats catch 3 rats in 3 minutes, how many cats are needed to catch 1 rat in 1 minute?",
            options: [1, 2, 3, 4],
            answer: 1
        },
        {
            question: "A number becomes double when you add 0 to it. What is the number?",
            options: [5, 8, 10, 0],
            answer: 0
        },
        {
            question: "Which number is missing? 2, 6, 12, 20, ?",
            options: [24, 30, 28, 32],
            answer: 30
        },
        {
            question: "What has a face and two hands but no arms or legs?",
            options: ["Clock", "Coin", "Person", "Book"],
            answer: "Clock"
        },
        {
            question: "If you multiply me by any number, the answer is always the same. What number am I?",
            options: [1, 0, 10, -1],
            answer: 0
        },
        {
            question: "Which number is always in the middle of 1 and 9?",
            options: [4, 5, 6, 7],
            answer: 5
        },
        {
            question: "What comes next? 10, 20, 40, ?",
            options: [50, 60, 70, 80],
            answer: 80
        }
    ]

}

export default questions;