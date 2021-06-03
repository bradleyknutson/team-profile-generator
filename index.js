import fs from "fs";
import inquirer from "inquirer";
import { HtmlFactory } from "./lib/HtmlFactory.js";
import { Manager, Intern, Engineer } from "./lib/employees/index.js";
import {
  addAnotherQuestion,
  employeeTypeQuestion,
  employeeTypes,
  engineerQuestions,
  internQuestions,
  managerQuestions,
} from "./lib/employee-questions/employeeQuestions.js";

const employees = [];
const addEmployee = () => {
  inquirer.prompt(employeeTypeQuestion).then((answers) => {
    console.log(answers);
    switch (answers.employeeType) {
      case employeeTypes.intern:
        createIntern();
        break;
      case employeeTypes.engineer:
        createEngineer();
        break;
      case employeeTypes.manager:
        createManager();
        break;
      default:
        break;
    }
  });
};

const addAnotherEmployee = () => {
  inquirer.prompt(addAnotherQuestion).then((answer) => {
    if (answer.addAnother) {
      addEmployee();
    } else {
      createHtml();
    }
  });
};

const createIntern = () => {
  inquirer.prompt(internQuestions).then((answers) => {
    const { id, name, email, school } = answers;
    employees.push(new Intern(id, name, email, school));
    addAnotherEmployee();
  });
};
const createEngineer = () => {
  inquirer.prompt(engineerQuestions).then((answers) => {
    const { id, name, email, github } = answers;
    employees.push(new Engineer(id, name, email, github));
    addAnotherEmployee();
  });
};
const createManager = () => {
  inquirer.prompt(managerQuestions).then((answers) => {
    const { id, name, email, officeNumber } = answers;
    employees.push(new Manager(id, name, email, officeNumber));
    addAnotherEmployee();
  });
};

const createHtml = () => {
  const html = HtmlFactory.createHtmlPage(employees);
  fs.writeFileSync("./dist/index.html", html);
};

addEmployee();
