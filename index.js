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
    choices: ["MIT", "GPL", "AGPL", "Apache", "BSD"],
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

  // Sections:
  // Description
  // Table of Contents - auto generate?
  // Installation
  // Usage
  // License - pick from choices array
  // Contributing
  // Tests
  // Questions

  //   When a user enters the project title, it's displayed as the title of the README.

  // When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions, this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.

  // When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

  // When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.

  // When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.

  // When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.
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
      // writeToFile("README.md", generateMarkdown(answers));
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
