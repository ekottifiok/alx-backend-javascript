const fs = require('fs')

const readDatabase = (fileName) => new Promise((resolve, reject) => {
  if (!fileName) reject(new Error('Cannot load the database'));

  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) reject(new Error('Cannot load the database'));
    if (data) {
      const fileLines = data.toString('utf-8').trim().split('\n');
      groups = {}
      fileLines.forEach((item) => {
        const splitted = item.split(',');
        const name = splitted[3]
        if (!(name in groups)) groups[name] = []
        groups[name].push(splitted[0])
      });
      if ('field' in groups) delete groups.field
      resolve(groups);
    }
  });
});

module.exports = readDatabase