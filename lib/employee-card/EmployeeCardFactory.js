import { EmployeeCard } from "./EmployeeCard.js";

export class EmployeeCardFactory {
  static createEngineerCard(engineer) {
    return EmployeeCard.createCard(engineer, `Github: ${engineer.github}`);
  }
  static createInternCard(intern) {
    return EmployeeCard.createCard(intern, `School: ${intern.school}`);
  }
  static createManagerCard(manager) {
    return EmployeeCard.createCard(manager, `Office: ${manager.officeNumber}`);
  }

  static createRoleCard(employee) {
    switch (employee.role) {
      case "Engineer":
        return this.createEngineerCard(employee);
        break;
      case "Manager":
        return this.createManagerCard(employee);
        break;
      case "Intern":
        return this.createInternCard(employee);
        break;
      default:
        break;
    }
  }
}
