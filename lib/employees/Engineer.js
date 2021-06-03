import { Employee } from "./Employee.js";

export class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(id, name, email);
    this._role = "Engineer";
    this._github = github;
  }

  get github() {
    return this._github;
  }
}
