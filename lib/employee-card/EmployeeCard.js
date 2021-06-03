export class EmployeeCard {
  static createCard(employee, additionalInfo) {
    return `\n      <div class="card" style="width: 18rem">
        <div class="card-header bg-primary text-white">
          <h5 class="card-title">${employee.name}</h5>
          <h6 class="card-subtitle mb-2">${employee.role}</h6>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">
              email: <a href="mailto:${employee.email}">${employee.email}</a>
            </li>
            <li class="list-group-item">
              ${additionalInfo}
            </li>
          </ul>
        </div>
      </div>`;
  }
}
