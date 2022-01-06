const inquirer = require('inquirer');
const fs = require('fs');

const questions = [{
    type: 'input',
    message: 'What is your name?',
    name: 'Name',

},
    {
        type: 'input',
        message: 'What is your location?',
        name: 'Location',

    },
    {
        type: 'input',
        message: 'What is your bio?',
        name: 'Bio',

    },
    {
        type: 'input',
        message: 'What is your github url?',
        name: 'GitHub',

    },
    {
        type: 'input',
        message: 'What is your linkedIn url?',
        name: 'LinkedIn',

    },

]
inquirer
    .prompt(questions)
        /* Pass your questions in here */

    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers);
        // const answers = { name, location, bio, github, linkedIn }
        fs.writeFile(
            `portfolio.html`
                `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Portfolio</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name} </h1>
    <p class="lead">I am from ${location}</p>
    <p class = "lead"> About me : ${bio}</p>
    
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin} sdf</li>
    </ul>
  </div>
</div>
</body>
</html> `,
            (err) =>
                err ? console.error(err) : console.log('success!')

        )

        

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });