// export function to generate the entire html page
module.exports = (profiles) => {
    return `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>The Team</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <nav class="navContainer">
        <div class="teamHeading">
            <div class="textCenter">The Team</div>
        </div>
      </nav>
      <section class="profileSpot">
        ${createProfiles(profiles)}
      </section>
  </body>
  </html>
      `;
  };

// create the team's profiles within the html element
const createProfiles = (profiles) => {
    // create the manager's html
    const createManager = (manager) => {
      return `
      <section class="employeeBox">
          <div class="boxHeader">
              <h2 class="boxTitle">${manager.getName()}</h2>
              <h3 class="boxTitle"></i>${manager.getRole()}</h3>
          </div>
          <div class="boxBody">
              <ul class="employeeList">
                  <li class="employeeItem">ID: ${manager.getId()}</li>
                  <li class="employeeItem">Email: <a href="Email to:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li class="employeeItem">Office number: ${manager.getOfficeNumber()}</li>
              </ul>
          </div>
      </section>
          `;
    };
  
    // create the engineer's html
    const createEngineer = (engineer) => {
      return `
          <section class="employeeBox">
      <div class="boxHeader">
          <h2 class="boxTitle">${engineer.getName()}</h2>
          <h3 class="boxTitle"></i>${engineer.getRole()}</h3>
      </div>
      <div class="boxBody">
          <ul class="employeeList">
              <li class="employeeItem ">ID: ${engineer.getId()}</li>
              <li class="employeeItem ">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="employeeItem ">GitHub: <a href="https://github.com/${engineer.getUsername()}">${engineer.getUsername()}</a></li>
          </ul>
      </div> 
  </section>
          `;
    };
  
    // create intern's html
    const createIntern = (intern) => {
      return `
          <section class="employeeBox">
      <div class="boxHeader">
          <h2 class="boxTitle">${intern.getName()}</h2>
          <h3 class="boxTitle"></i>${intern.getRole()}</h3>
      </div>
      <div class="boxBody">
          <ul class="employeeList">
              <li class="employeeItem ">ID: ${intern.getId()}</li>
              <li class="employeeItem ">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="employeeItem ">Education: ${intern.getUniversity()}</li>
          </ul>
      </div>
  </section>
          `;
    };
  
    const html = [];
  
    html.push(
      profiles
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => createManager(manager))
    );
    html.push(
      profiles
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => createEngineer(engineer))
        .join("")
    );
    html.push(
      profiles
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => createIntern(intern))
        .join("")
    );
  
    return html.join("");
  };
