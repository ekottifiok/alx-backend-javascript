const fs = require('fs');

const countStudents = (fileName) => new Promise((resolve, reject) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) reject(new Error('Cannot load the database'));
    
    if (data) {
      const fileLines = data.toString('utf-8').trim().split('\n');
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
      resolve(true);
    }
  });
});

module.exports = countStudents;
