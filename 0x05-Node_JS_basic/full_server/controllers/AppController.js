/**
 * It returns a 200 status and the message Hello Holberton School!
 */

export default class AppController {
  static getHomepage(_, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;