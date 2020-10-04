const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions and examples to use your project?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'What are the references used for your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you want to use?',
        choices: ['MIT', 'Apache', 'GPL', 'Apache 2', 'BSD'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you would like to contribute to this project please enter yes here',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'If you would like to add testing please enter yes here',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your GitHub profile?',
    },
    {
        type: 'input',
        name: 'contact',
        message: 'How can I reach you in the future?',
    },
])
    .then(answers => {
        console.log(answers)
        let dataInput = generateMarkdown(answers)
        console.log(dataInput)
        fs.writeFile('readme.md', dataInput, err => {
            if (err) {
              console.error(err)
              return
            }
            //file written successfully
          })
    })

    .catch(err => {
        console.log(err)
    })
