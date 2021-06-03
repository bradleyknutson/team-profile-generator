export class Employee {
  constructor(id, name, email) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._role = "Employee";
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get email() {
    return this._email;
  }

  get role() {
    return this._role;
  }
}
