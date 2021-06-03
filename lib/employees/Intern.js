import { Employee } from "./Employee.js";

export class Intern extends Employee {
  constructor(id, name, email, school) {
    super(id, name, email);
    this._role = "Intern";
    this._school = school;
  }

  get school() {
    return this._school;
  }
}
