//packages required to function
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generate-markdown');
const fs = require('fs/promises')

const path = require('path');
// const { appendFile } = require('fs');
//Task - to create a professional README file generator

// questions to ask:
inquirer.prompt([
    {
        type: 'input',
        message: "What is your Projects Title?",
        name: 'title',
        validate: titleInput => {
            if(titleInput){
                return true;
            }else{
                console.log("Please enter your Projects title");
                return false
            }
        }
    },
    {
        type: 'input',
        message: "What is the Projects Description?",
        name: 'description',
        validate: projectDescription => {
            if(projectDescription){
                return true;
            }else{
                console.log("Please enter your Projects description");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Please insert how a user would install your Project? ie, clone repo, use npm install etc",
        name: 'installation',
        validate: projectInstructions => {
            if(projectInstructions){
                return true;
            }else{
                console.log("Please enter your Projects Installations instructions!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Whats may a user do with your project? ie Usage Information?",
        name: 'usage',
        validate: usageInfo => {
            if(usageInfo){
                return true;
            }else{
                console.log("Please enter your usage info");
                return false;
            }
        }
    },
    {
        type: 'list',
        message: "What is the license?",
        name: 'license',
        choices: [
            'MIT', 'GPL-v2', 'Apache-v2', 'Mozilla-Public-License', 'Eclipse-Public-License-v2', 'No-License',
        ],
    },
    {
        type: 'input',
        message: "How may other developers Contribute?",
        name: 'contribution',
        validate: userContibute => {
            if(userContibute){
                return true;
            }else{
                console.log("Please enter if and how others may contribute to your project?");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "What are the Test Instructions?",
        name: 'tests',
        validate: testInput => {
            if(testInput){
                return true;
            }else{
                console.log("Please enter your test instructions");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "are you open to users contacting you? explain how. (github user and email input next)",
        name: 'contact',
        validate: contactInput => {
            if(contactInput){
                return true;
            }else{
                console.log("Please insert");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "What is your GitHub Username?",
        name: 'github',
        validate: githubInput => {
            if(githubInput){
                return true;
            }else{
                console.log("Please enter your GitHub username/ Profile name");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "What is your email?",
        name: 'email',
        validate: (emailInput) => {
            const compareInput = emailInput.match("@")
            if(emailInput){
                return true;
            }else{
                console.log("Please enter your Email");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "What is the Technology used in this project?",
        name: 'tech',
        validate: techInput => {
            if(techInput){
                return true;
            }else{
                console.log("Please enter what Technology you have user throughout this project");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "What is your projects demo link/ URL?",
        name: 'demo',
        validate: demoInput => {
            if(demoInput){
                return true;
            }else{
                console.log("Please enter the demo link for your project");
                return false;
            }
        }
    }
    
]).then((answer) => {
    console.log(answer);
    //calling the function to generate readme with users input
    const markdown = generateMarkdown(answer)



    //function to relocated generated file to output folder
    const outputPath = path.join(__dirname, 'output', 'README.md')
    fs.writeFile(outputPath, markdown, 'utf-8')
        .then(() => {
            console.log('generated!')
        })
        
})