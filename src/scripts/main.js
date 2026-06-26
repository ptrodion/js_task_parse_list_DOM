'use strict';

const elementParent = document.querySelector('ul');
const elementsLi = elementParent.querySelectorAll('li');
const elemListOfEmployees = Array.from(elementsLi);

const parseSalary = (salaryStr) => {
  if (!salaryStr) {
    return 0;
  }

  return Number(salaryStr.replace(/[^0-9.]/g, '')) || 0;
};

const arrayListOfEmployees = elemListOfEmployees.map((employee) => {
  const { position, salary, age } = employee.dataset;
  const employeeName = employee.textContent.trim();

  return {
    name: employeeName,
    position,
    salary,
    age,
  };
});

const sortedBySalary = arrayListOfEmployees.sort(
  (a, b) => parseSalary(b.salary) - parseSalary(a.salary),
);

const newListHTML = sortedBySalary
  .map((user) => {
    return `
      <li
      data-position="${user.position}"
      data-salary="${user.salary}"
      data-age="${user.age}"
      >
    ${user.name}
    </li>
    `;
  })
  .join('');

elementParent.innerHTML = newListHTML;
