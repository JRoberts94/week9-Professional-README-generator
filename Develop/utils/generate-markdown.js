//function to render the license badge and replace - with spaces
function renderLicenseBadge(license) {
  const licenseName = encodeURIComponent(license.replace('-', ' '))
  //replaces - (dash/minus symbols) for " " (spaces)
  return `![${license}-licensed](https://img.shields.io/badge/License-${licenseName}-red)`
}

// function to generate the markdown
function generateMarkdown({
  title,
  description,
  installation,
  usage,
  license,
  contribution,
  tests,
  contact,
  github,
  email,
  tech,
  demo,

}) {
  return `
# ${title}

${renderLicenseBadge(license)}

## Table of Contents 
- [Description](#description)
- [Licensing info](#license)
- [Questions + Contact](#questions)
- [Demo](#demo)

## Demo
[demo](${demo})

## Description
${description}
lorem ipsum blah blah blah

## Installation Instructions
${installation}

## Usage Information
${usage}

## License
${renderLicenseBadge(license)}
[License information](https://opensource.org/licenses)

## Contributing
${contribution}

## Test Instructions
${tests}

## Questions
${contact}

Visit my GitHub profile here: [${github}](https://github.com/${github})
<br>
Email: ${email}

## Technology used
${tech}
`
}
//syntax to export generateMarkddown for index.js
module.exports = generateMarkdown;
