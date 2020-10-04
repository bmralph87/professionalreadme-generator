// const inquirer = require('inquirer');
// // const generateMarkdown = require('./utils/generateMarkdown');
// // const { writeFile, copyFile } = require('./utils/generateMarkdown');

// // const fs = require('fs');

// // console.log(generatePage());

// // array of questions for user

// const promptUser = () => {
//      inquirer.prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name? (Required)',
// /*         validate: nameInput => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log('Please enter your name!');
//             return false;
//           }
//         } */
//       },
//       {
//         type: 'input',
//         name: 'github',
//         message: 'What is your Github Username? (Required)',
//         validate: githubInput => {
//           if (githubInput) {
//             return true;
//           } else {
//             console.log('Please enter your Github Username!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'confirm',
//         name: 'confirmAbout',
//         message: 'Would you like to enter some information about yourself for an "About" section?',
//         default: true
//       },
//       {
//         type: 'input',
//         name: 'about',
//         message: 'Provide some information about yourself:',
//         when: ({ confirmAbout }) => {
//           if (confirmAbout) {
//             return true;
//           } else {
//             return false;
//           }
//         }
//       }
//     ]).then(answers => {
//         console.log(answers)
//         return answers;
//     })
//     .catch(err => {
//         console.log(err)
//     })
//   };
// //   const promptProject = projectData => {
// //     // If there's no 'projects' array property, create one
// //     if (!portfolioData.projects) {
// //       portfolioData.projects = [];
// //     }
// //     console.log(`
  
//     let answers = promptUser()

      
    
    

//     // .then(promptProject)
// //     .then(portfolioData => {
// //         return generatePage(portfolioData);
// //   })
// //   .then(pageHTML => {
// //     return writeFile(pageHTML);
// //   })
// //   .then(writeFileResponse => {
// //     console.log(writeFileResponse);
// //     return copyFile();
// //   })
// //   .then(copyFileResponse => {
// //     console.log(copyFileResponse);
// //   })
// //   .catch(err => {
// //     console.log(err);
// //   });

// // // function to write README file
// // function writeToFile(fileName, data) {
// // }

// // // function to initialize program
// // function init() {
// // inquirer.prompt (questions)
// // }

// /// function call to initialize program
// // init();/ 

// // function writeToFile(fileName, data) {
//     fs.writeFile('./Develop/generateMarkdown.js',README.MD, err => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log('README created! Check out generateMarkdown.js in this directory to see it!');
//     });
// // // function to initialize program
// // function init() {
// //     questions()
// //     .then(answers => {
// //         writeToFile(‘README.md’, generateMarkdown({...answers}))
// //     })
// // }
// // // function call to initialize program
// // init();