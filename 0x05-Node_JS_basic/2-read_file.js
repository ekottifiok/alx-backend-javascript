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
    var item = item.split(',');
    if (item[3] === 'CS') CS.push(item[0]);
    else if (item[3] === 'SWE') SWE.push(item[0]);
  });
  console.log(`Number of students: ${CS.length + SWE.length}`);
  console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
  console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
};
