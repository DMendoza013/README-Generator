// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Badges

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
 
  ${data.description}
  
  ## Installation 

  ${data.installation}
  
  ## Usage 

  ${data.usage}

  ## License
  
  ## Contribution

  ${data.contributions}
  
  ## Tests

  ${data.test}

  ## Questions

  A link to my GitHub: https://github.com/${data.username}

  Send an email for any additional questions about this project: ${data.email}
`;
}

module.exports = generateMarkdown;
