//packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Choice = require("inquirer/lib/objects/choice");
const generateMarkdown = require("./generateMarkdown")
// array of questions for user input
const questions = [
    { type: "input", message: "What do you want for a title?", name: "title" },
    {
        type: "input",
        message: "Include installation instructions.",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide usage instructions.",
        name: "usage"
    },
    {
        type: "list",
        message: "License choices",
        name: "licenseChoices",
        choices: ["MIT", "BSD 3", "None", "APACHE 2.0", "GPLB 3.0"],
    },
    {
        type: "input",
        message: "How can other developers contribute?",
        name: "contributing",
    },
    {
        type: "input",
        message: "Description",
        name: "discription"
    },
    {
        type: "input",
        message: "Test information",
        name: "tests",
    },
    {
        type: "input",
        message: "GitHub user name",
        name: "github",
    },
    {
        type: "input",
        message: "Email adress",
        name: "email",
    },
];

// function to write README file
function writeToFile(data) {
    fs.writeFile("./README.md", data, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("File Written");
        }
    });
}

//function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(generateMarkdown(data));
    });
}

// Function call to initialize app
init();
