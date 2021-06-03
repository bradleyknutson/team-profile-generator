import { endHtml, starterHtml } from "./htmlHelper.js";
import { EmployeeCardFactory } from "./employee-card/EmployeeCardFactory.js";

export class HtmlFactory {
  static createHtmlPage(employeeList) {
    const employeeCards = employeeList.reduce((employeeCards, employee) => {
      return employeeCards + EmployeeCardFactory.createRoleCard(employee);
    }, "");
    return starterHtml + employeeCards + endHtml;
  }
}
