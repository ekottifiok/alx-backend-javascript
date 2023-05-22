const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DbFile = process.argv.length > 2 ? process.argv[2] : '';

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

const ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseArr = ['This is the list of our students'];

      countStudents(DbFile)
        .then((report) => {
          responseArr.push(report);
          const responseText = responseArr.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          responseArr.push(err instanceof Error ? err.message : err.toString());
          const responseText = responseArr.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Listening at http://${HOST}:${PORT}\n`);
});

module.exports = app;
