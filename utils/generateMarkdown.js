// function to generate markdown for README
// ? Use handlebars or mustache to generate templated markdown
function generateMarkdown(data) {
  // When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.testing}

  ## Questions
  For any questions on this repo, you can reach the maintainer on [GitHub](https://github.com/${data.githubUsername}) or via email at ${data.email}.
`;
}

// Changed below to export default with ESM
// module.exports = generateMarkdown;
export default generateMarkdown;
