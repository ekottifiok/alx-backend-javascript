const fs = require('fs');

module.exports = function countStudents(fileName) {
  if (!fs.existsSync(fileName)) {
    throw new Error('Cannot load the database');
  }

  if (!fs.statSync(fileName).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileLines = fs
    .readFileSync(fileName, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');

  const CS = [];
  const SWE = [];

  fileLines.forEach((item) => {
    const splitted = item.split(',');
    if (splitted[3] === 'CS') CS.push(splitted[0]);
    else if (splitted[3] === 'SWE') SWE.push(splitted[0]);
  });

  console.log(`Number of students: ${CS.length + SWE.length}`);
  console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
  console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
};
