const { getMaxListeners } = require("process")

// function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}

    ![license](https://img.shields.io/badge/License%3A-${data.license}-blue.svg)
    ![Github] (https://github.com/bmralph87-${data.questions})
    [Contact] <brittney.mr22@gmail.com>
  
  ## Table of Contents(Optional)


        * [Installation](#installation)
        * [Usage](#usage)
        * [Credits](#credits)
        * [License](#license)
        * [Contributing](#contributing)
        * [Tests](#tests)
        * [Questions](#questions)


## Installation
${data.installation}

## Usage 
${data.usage}

## Credits
${data.credits}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.test}

 ## Questions
 ${data.questions}

 ## Contact
 ${data.contact}
`
;
}

module.exports = generateMarkdown;


