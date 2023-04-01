import { Teacher } from '../../task_1/js/main'

interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

interface Directors extends Teacher {
  numberOfReports: number
}

const studentsList: Student[] = [
  {
    firstName: "Nsikak",
    lastName: "Ekott",
    age: 45,
    location: "Rivers"
  },
  {
    firstName: "Nsikak",
    lastName: "Ekott",
    age: 45,
    location: "Rivers"
  }
]


/**
 * - Using Vanilla Javascript, render a table and for each elements in the array,
 * append a new row to the table
 * 
 * - Each row should contain the first name of the student and the location
 */

export const renderTable = (studentsList: Array<Student>): void =>  {
  // create table tag
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // insert headers
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentsList);


const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
