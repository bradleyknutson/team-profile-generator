export const employeeTypes = Object.freeze({
  intern: "Intern",
  engineer: "Engineer",
  manager: "Manager",
});

export const employeeTypeQuestion = [
  {
    name: "employeeType",
    type: "list",
    message: "Which is the role of the employee you'd like to add?",
    choices: [
      employeeTypes.intern,
      employeeTypes.engineer,
      employeeTypes.manager,
    ],
  },
];

const baseQuestions = [
  {
    name: "name",
    type: "input",
    message: "What is their name?",
  },
  {
    name: "id",
    type: "number",
    message: "What is their ID?",
  },
  {
    name: "email",
    type: "input",
    message: "What is their email?",
  },
];

export const internQuestions = [
  ...baseQuestions,
  {
    name: "school",
    type: "input",
    message: "Which school did the intern go to?",
  },
];

export const managerQuestions = [
  ...baseQuestions,
  {
    name: "officeNumber",
    type: "number",
    message: "What is the number of the manager's office?",
  },
];

export const engineerQuestions = [
  ...baseQuestions,
  {
    name: "github",
    type: "input",
    message: "What is the engineer's github username?",
  },
];

export const addAnotherQuestion = [
  {
    name: "addAnother",
    type: "confirm",
    message: "Would you like to add another employee?",
  },
];
