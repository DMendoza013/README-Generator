// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
        {
            //title
            type: 'input',
            name: 'title',
            message: 'Enter a title for your README'  
        },
        {
            //description
            type: 'input',
            name: 'description',
            message: 'Enter your project description'
        },
        {
            //installation instructions
            type: 'input',
            name: 'installation',
            message: 'create a list of steps so that users will know how to install your project'
        },
        {
            //usage information
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for using your project'
        },
        {
            //contribution guidelines
            type: 'input',
            name: 'contributions',
            message: 'include guidelines for developers so that they can contribute to the project'
        },
        {
            //test instructions
            type: 'input',
            name: 'test',
            message: 'Explain how to test this project'
        },
        {
            //license
            type: 'list',
            name: 'license',
            message: 'what license does your project use?',
            choices: ["None", "Apache 2.0", "MIT","BSD 3-Clause"],

        },
        {
            //Github username
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            // email address
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?'
        }    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`generatedREADME.md`, data, (err) => {
        err ? console.error(err) : console.log(`README created for ${fileName}!`)
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data);
        let mdContent  = generateMarkdown(data);
        writeToFile(data.title, mdContent);
    })
}

// Function call to initialize app
init();
