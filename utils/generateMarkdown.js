//i used the link below for the license badge icon and license link 
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// this function checks for the selected license and returns it to the md
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'Apache 2.0'){
    badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }else if(license === 'MIT') {
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }else if (license === 'BSD 3-Clause'){
    badge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
  }else if (license === 'None') {
    badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// this function returns the license link to the md
function renderLicenseLink(license) {
  let link = '';
  if(license === 'Apache 2.0'){
    link = 'https://opensource.org/licenses/Apache-2.0'
  }else if(license === 'MIT') {
    link = 'https://opensource.org/licenses/MIT'
  }else if (license === 'BSD 3-Clause'){
    link = 'https://opensource.org/licenses/BSD-3-Clause'
  }else if (license === 'None') {
    link = ''
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// this function returns the license name in the license section of README
function renderLicenseSection(license) {
    let section = ''
    if (license === 'None') {
      section = 'N/A'
    }else {
      section = `The license used for this project is ${license}`
    }
    return section;
}

// TODO: Create a function to generate markdown for README
// generated markdown from the data that was gathered in index.js from inquirer
function generateMarkdown(data) {
  return `# ${data.title}

  ## ${renderLicenseBadge(data.license)} 

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

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Contribution

  ${data.contributions}
  
  ## Tests

  ${data.test}

  ## Questions

  A link to my GitHub: https://github.com/${data.username}

  Send an email for any additional questions about this project: ${data.email}
`;
}
//exporting generateMarkdown to index.js to be written to a .md file
module.exports = generateMarkdown;
