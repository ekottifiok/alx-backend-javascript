const fs = require('fs');

const countStudents = (fileName) => new Promise((resolve, reject) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) reject(new Error('Cannot load the database'));
    if (data) {
      const fileLines = data.toString('utf-8').trim().split('\n');
      const CS = [];
      const SWE = [];
      fileLines.forEach(item => {
        item = item.split(',');
        if (item[3] === 'CS') CS.push(item[0]);
        else if (item[3] === 'SWE') SWE.push(item[0]);
      });
      console.log(`Number of students: ${CS.length + SWE.length}`);
      console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
      console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
      resolve(true);
    }
  });
});

module.exports = countStudents;
