import readDatabase from "../utils";

const VALID_MAJORS = ['CS', 'SWE'];

export default class StudentsController {
  static getAllStudents(_, response) {
    readDatabase(process.argv.length > 2 ? process.argv[2] : '')
    .then((groups) => {
      no_students = 0
      res_str = 'This is the list of our students\n'
      Object.values(groups).forEach(i => no_students += i.length)
      Object.keys(groups).forEach(i => {
        res_str += `Number of students in ${i}: ${groups[i].length}. List: ${groups[i]}\n`
      })
      response.status(200).send(res_str);
    })
    .catch((err) => {
      const error = err instanceof Error ? err.message : err.toString()
      response.status(500).send(error);
    });
  }

  static getAllStudentsByMajor(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(dataPath)
      .then((groups) => {
        let responseText = '';

        if (Object.keys(groups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        response.status(200).send(responseText);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
    }
};