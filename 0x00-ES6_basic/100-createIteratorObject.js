export default function createIteratorObject(report) {
  let employees = [];
  Object.keys(report.allEmployees).forEach((key) =>
    report.allEmployees[key].forEach((val) => employees.append(val))
  );

  return employees;
}
