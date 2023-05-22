const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const fileName = process.argv.length > 2 ? process.argv[2] : '';
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
      resolve([
        `Number of students: ${CS.length + SWE.length}\n`
        + `Number of students in CS: ${CS.length}. List: ${CS.join(', ')}\n`
        + `Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`,
      ]);
    }
  });
});

app.get('/', (_, res) => res.send('Hello Holberton School!'));

app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(fileName)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));

module.exports = app;
