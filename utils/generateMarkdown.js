// function to generate markdown for README
// ? Use handlebars or mustache to generate templated markdown
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

// Changed below to export default with ESM
// module.exports = generateMarkdown;
export default generateMarkdown;
