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
            message: 'What is the title for the README?'  
        },
        // {
        //     //description
        // },
        // {
        //     //installation instructions
        // },
        // {
        //     //usage information
        // },
        // {
        //     //contribution guidelines
        // },
        // {
        //     //test instructions
        // },
        // {
        //     //license
        // }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data);
    })
}

// Function call to initialize app
init();
