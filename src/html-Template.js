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
      <section class="developingProfiles">
        ${developProfiles(profiles)}
      </section>
  </body>
  </html>
      `;
  };

// develop the team's profiles within the html element
function developProfiles(profiles) {
    // develop the manager's html
    function developManager (manager) {
      return `
      <section class="employeeBox">
          <div>
            <ul>
                <li class="boxTitle">${manager.getName()}</li>
                <li class="boxTitle">${manager.getRole()}</li>
            </ul>
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
  
    // develop the engineer's html
    function developEngineer(engineer) {
      return `
          <section class="employeeBox">
      <div>
        <ul>
            <li class="boxTitle">${engineer.getName()}</li>
            <li class="boxTitle">${engineer.getRole()}</li>
        </ul>
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
  
    // develop the intern's html
    function developIntern(intern) {
      return `
          <section class="employeeBox">
      <div>
        <ul>
            <li class="boxTitle">${intern.getName()}</li>
            <li class="boxTitle">${intern.getRole()}</li>
        </ul>
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
  
const indexHTML = [];
  
indexHTML.push(
    profiles
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => developManager(manager))
);
indexHTML.push(
    profiles
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => developEngineer(engineer))
    .join("")
);
indexHTML.push(
    profiles
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => developIntern(intern))
    .join("")
);
  
return indexHTML.join("");
};
