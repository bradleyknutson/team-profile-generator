import { Employee } from "./Employee.js";

export class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email);
    this._role = "Manager";
    this._officeNumber = officeNumber;
  }

  get officeNumber() {
    return this._officeNumber;
  }
}
