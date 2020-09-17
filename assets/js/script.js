let codeQuiz = [
    {
        question: "commonly used data types Do Not include?",
        a: "Strings",
        b: "Booleans",
        c: "Alerts",
        d: "Numbers",
    },
    {
        question: "The condition in an if/else statement is enclosed within__________?",
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets",
    },
    {
        question: "Arrays in JavaScript can be used to store _________?",
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
    },
    {
        question: "String values must be enclosed within _________ when being\
                  when being assigned to variables?",
        a: "comments",
        b: "curly brackets",
        c: "quotes",
        d: "parenthesis",
    },
    {
        question: "A very useful tool used to during development and debugging for printing\
                  for printing content to the debugger is:?",
        a: "JavaScript",
        b: "terminal/bash",
        c: "for loops",
        d: "console.log",
    },

];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const firstBtn = document.getElementById("first-btn");
const secondBtn = document.getElementById("second-btn");
const thidBtn = document.getElementById("third-btn");
const fourthBtn = document.getElementById("fourth-btn");
const nextBtn = document.getElementById("next-button");

let myQuiz = 0;
let score = 0;

startQuiz();

