const inquirer = require('inquirer');
const fs = require('fs');
const generateProfile = require('./src/html-Template');

 const Engineer = require('./lib/Engineer-class');
 const Intern = require('./lib/Intern-class');
 const Manager = require('./lib/Manager-class');

 const newStaffData = [];

 // Questions function
 const Questions = async () => {
    const Answers = await inquirer.prompt ([
        {
            type:"input",
            message: "Type your name",
            name: "name",
        },
        {
            type:"input",
            message: "Enter your ID number",
            name: "id",
        },
        {
            type:"input",
            message: "Enter your email",
            name: "email",
        },
        {
            type:"list",
            message: "Enter your role",
            name: "role",
            choices: ["Engineer", "Intern", "Manager"],
        },
    ])

    // adding the office number sequence to the questions when manager is chosen
    if (Answers.role === "Manager") {
        const ManagerAnswers = await inquirer.prompt([
            {
                type:"input",
                message: "Enter the number of your office",
                name: "officeNumber",
            },
        ])
        const newManager = new Manager (
            Answers.name,
            Answers.id,
            Answers.email,
            ManagerAnswers.officeNumber,
        );
        newStaffData.push(newManager);

    // adding the github username sequence to the questions when engineer is chosen
    } else if (Answers.role === "Engineer") {
        const gitHubAnswers = await inquirer.prompt([
            {
                type:"input",
                message: "Enter your GitHub username",
                name: "username",
            }
        ])
        const newEngineer = new Engineer(
            Answers.name,
            Answers.id,
            Answers.email,
            gitHubAnswers.username,
        );
        newStaffData.push(newEngineer);

    // adding the school sequence to the questions when intern is chosen
    } else if (Answers.role === "Intern") {
        const internAnswers = await inquirer.prompt([
            {
                type:"input",
                message: "Enter the university you attended",
                name: "university",
            }
        ])
        const newIntern = new Intern (
            Answers.name,
            Answers.id,
            Answers.email,
            internAnswers.university,
        );
        newStaffData.push(newIntern);
    }

 };
// end of the questions function

//Questions in the terminal on whether or not to add more staff members or build the team structure
async function promptQuestions () {
    await Questions()

    const addStaffAnswers = await inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do next?",
            name: "addStaff",
            choices: ['Add a new staff member', 'Build team']
        }
    ])
    if (addStaffAnswers.addStaff === 'Add a new staff member') {
        return promptQuestions();
    }
    return buildTeam();
}

promptQuestions();

//function to write the html file after choosing to build the team in the application
function buildTeam () {
    fs.writeFileSync ("./dist/index.html",
    generateProfile(newStaffData),
    "utf-8",
    );
}
