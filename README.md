# node-readme-generator

## Description

Submission for Module 11 of the University of Birmingham Skills Bootcamp in Front-End Web Development & UX.

As this is a command line application, a [Demonstration Video](https://youtu.be/0DOTfE0635E) has been uploaded to showcase the functionality.

This has been developed to meet the following Acceptance Criteria:

- Create a command-line application that accepts user input.
- When a user is prompted for information about the application repository, a high-quality, professional README.md is generated with:
  - The title of my project
  - Sections entitled:
    - Description
    - Table of Contents
    - Installation
    - Usage
    - License
    - Contributing
    - Tests
    - Questions
  - When a user enters the project title, it's displayed as the title of the README.
  - When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions, this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.
  - When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.
  - When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.
  - When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.
  - When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.

## Installation

- This project uses ES Modules and therefore requires a modern version of Node.js (>= 16.0.0)
- Node.js version is enforced through the .npmrc file

Run `npm install` or `npm i` to install the dependencies.

## Learning Outcomes

- Learnt how to use the Inquirer.js library to prompt a command line user
- Reviewed using the fs functions in Node
- Implemented Shields.io badges

## Resources used

- [Inquirer Documentation](https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/README.md#installation)
- [Node.js Docs: Enabling ESM](https://nodejs.org/api/esm.html#enabling)
- [Stack Overflow: Specify Node.js Version](https://stackoverflow.com/questions/29349684/how-can-i-specify-the-required-node-js-version-in-package-json)
- [Stack Overflow: Replace spaces with dashes](https://stackoverflow.com/questions/1983648/replace-spaces-with-dashes-and-make-all-letters-lower-case)
- [Node.js Docs: Writing Files](https://nodejs.dev/en/learn/writing-files-with-nodejs/)
- [Shields.io Badges](https://shields.io/badges)
- [GitHub Gist (lukas-h): License Badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

## Mark Scheme Compliance

## License

Released under the MIT license. Full details in [LICENSE](./LICENSE).
