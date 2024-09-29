// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let employeesArray = [];
  let continueAddingEmployees = true
  while (continueAddingEmployees) {
    let firstName = prompt("Enter Employee First Name:");
    let lastName = prompt("Enter Employee Last Name:");
    let salary = parseFloat(prompt("Enter Employee Salary:"));
    if (isNaN(salary)) {
      return salary === 0;
    }
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
  }
  employeesArray.push(employee);
  continueAddingEmployees = confirm("Do you want to add another employee?");
  }
  return employeesArray;
  // TODO: Get user input to create and return an array of employee objects
}
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sumSalary = 0;
  for(let i = 0; i < employeesArray.length; i++) {
    sumSalary += employeesArray[i].salary;
    // return sumSalary;
  }
  const averageSalary = (sumSalary)/(employeesArray.length);
  // console.log("testing");
  console.log(`The average salary of all employees on the list is: $${averageSalary.toFixed(2)}`);
  // console.log(sumSalary);
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let computerChoice = Math.floor(Math.random() * employeesArray.length)
  let randomEmployee = employeesArray[computerChoice];
  console.log(`Randomly selected employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();
  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);