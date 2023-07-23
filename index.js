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
const questions = [];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer
    .prompt([
      /* Pass your questions in here */
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// function call to initialize program
init();
