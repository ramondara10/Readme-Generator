// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeReadMe = require("./utils/writeReadme");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project title?",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("Please enter a title");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "projectDescription",
        message: "What is your project description?",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("Please enter a description");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "projectInstallInstructions",
        message: "What are the installation instructions?",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("Please enter instructions");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "projectUsageInfo",
        message: "What is the projects usage info?",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("Please enter usage info");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "projectContribution",
        message: "What are your projects contribution guidelines?",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("Please enter guidelines");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "projectTestInstructions",
        message: "What are your projects test instructions?",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("Please enter test instructions");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "projectContributors",
        message: "Who contributed to this project?",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("Please enter at least one contributor");
                return false;
            }
        },
    },
    {
        type: "list",
        name: "projectLicense",
        message: "What is your project license?",
        choices: ["MIT", "GNU", "LaTex", "ISC"],
    },
    {
        type: "input",
        name: "userGithub",
        message: "What is your github username?",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("Please enter a username");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email?",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("Please enter an email");
                return false;
            }
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeReadMe(fileName, data);
}

// TODO: Create a function to initialize app
const promptUser = () => {
    return inquirer.prompt(questions);
};
function init() {
    promptUser()
        .then((response) => {
            return generateMarkdown(response);
        })
        .then((generatedMarkup) => {
            writeToFile("./readme.md", generatedMarkup);
        });
}

// Function call to initialize app
init();
