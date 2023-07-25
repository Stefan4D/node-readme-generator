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

const licenses = [
  "MIT",
  "GPL v3",
  "CC0 1.0",
  "Apache 2.0",
  "BSD 3.0",
  "MPL 2.0",
];

// array of questions for user
const questions = [
  /* Pass your questions in here */
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    default: "New Project",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
    default: "This is my new project",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for your project?",
    default: "Run npm install to install the dependencies.",
  },
  {
    type: "input",
    name: "usage",
    message: "How should users make use of this project?",
    default: "You can include this code in your project and...",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contributing guidelines for this project?",
    default: "To contribute to this project, please...",
  },
  {
    type: "input",
    name: "testing",
    message: "Please provide details of any tests included in this project",
    default: "No tests are included",
  },
  {
    type: "list",
    name: "license",
    message:
      "Which license agreement are you making this project available under?",
    choices: licenses.sort(),
    default: "MIT",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Please provide your GitHub username",
    // default: "",
  },
  {
    type: "input",
    name: "email",
    message:
      "Please provide the email address people can reach you at for questions",
    // default: "",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  // write the data to fileName
  try {
    fs.writeFileSync(fileName, data);
    // file written successfully
  } catch (err) {
    console.error(err);
  }
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      // console.log(answers); // answers is an object
      // console.log(generateMarkdown(answers));
      writeToFile(
        `./output/${answers.title
          .replace(/\s+/g, "-")
          .toLowerCase()}-README.md`,
        generateMarkdown(answers)
      );
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        // TTY = teletypewriter
        console.error(
          "Wrong execution environment. Please use Node or similar."
        );
      } else {
        console.error(error);
        // Something else went wrong
      }
    });
}

// function call to initialize program
init();
