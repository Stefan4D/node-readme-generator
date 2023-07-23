/*

    Imports

*/

// changed the below to import statements with ESM
// const fs = require('fs');
// const path = require('path');
// const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown.js');
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from "fs";
import inquirer from "inquirer";
import path from "path";

// array of questions for user
const questions = [
  /* Pass your questions in here */
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    default: "New Project",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  // write the data to fileName
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers); // answers is an object
      console.log(generateMarkdown(answers));
      // writeToFile("README.md", answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        // TTY = teletypewriter
      } else {
        // Something else went wrong
      }
    });
}

// function call to initialize program
init();
