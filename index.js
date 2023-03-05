//dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const generateProfile = require('./src/html-Template');

const Engineer = require('./lib/Engineer-class');
const Intern = require('./lib/Intern-class');
const Manager = require('./lib/Manager-class');
//employee data
const employeeData = [];

 //function for the opening inquiry for employees
 function init() {
    inquirer.prompt ({
        name: "choice",
        type: "list",
        message: "Please enter your employee information",
        choices: ["Enter your information if you are a Manager",
                  "Enter your information if you are an Engineer",
                  "Enter your information if you are an Intern"
                 ]
    })
    .then(function(answer) {
        switch(answer.choice) {
            case "Enter your information if you are a Manager":
            managerInfo();
            break;

            case "Enter your information if you are an Engineer":
            engineerInfo();
            break;

            case "Enter your information if you are an Intern":
            internInfo();
            break;
        }
    })
 }

 init ();

 //function for the manager information
 const managerInfo = async () => {
    const managerQ =  await inquirer.prompt ([
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
            type:"input",
            message: "What is your office number?",
            name: "officeNumber",
        },
        {
            type: "list",
            message: "What you like to add a new member or build the team?",
            name: "addStaff",
            choices: ['Add a staff member', 'Build the team',]
        }
    ])  
    if (managerQ.addStaff === 'Add a staff member') {
        return init();
    }
    const newManager = new Manager (
        managerQ.name,
        managerQ.id,
        managerQ.email,
        managerQ.officeNumber,
    );
    employeeData.push(newManager);
    return buildTeam();
     
};

//function for the engineer information
async function engineerInfo () {
    const engineerQ =  await inquirer.prompt ([
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
            type:"input",
            message: "What is your Github username",
            name: "username",
        },
        {
            type: "list",
            message: "What you like to add a new member or build the team?",
            name: "addStaff",
            choices: ['Add a staff member', 'Build the team',]
        }
    ])  
    if (engineerQ.addStaff === 'Add a staff member') {
        return init();
    } 
    const newEngineer = new Engineer(
        engineerQ.name,
        engineerQ.id,
        engineerQ.email,
        engineerQ.username,
    );
    employeeData.push(newEngineer);
    return buildTeam();
};

//function for the intern information
async function internInfo () {
    const internQ =  await inquirer.prompt ([
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
            type:"input",
            message: "Where did you attend school?",
            name: "school",
        },
        {
            type: "list",
            message: "What you like to add a new member or build the team?",
            name: "addStaff",
            choices: ['Add a staff member', 'Build the team',]
        }
    ])  
    if (internQ.addStaff === 'Add a staff member') {
        return init();
    }
    const newIntern = new Intern (
        internQ.name,
        internQ.id,
        internQ.email,
        internQ.school,
    )
    employeeData.push(newIntern);
    return buildTeam();  
}

//function to build the team
function buildTeam () {
    fs.writeFileSync ("./dist/index.html",
    generateProfile(employeeData),
    "utf-8",
    );
}
    
 

    
 
