import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * connects the routes to the handler
 * @param {Express} the express service
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
