import getStudentsByLocation from "./2-get_students_by_loc.js";

export default function updateStudentGradeByCity(params, city, newGrades) {
  const studentByLocation = getStudentsByLocation(params, city);
  const studentInNewGrade = new Map();
  newGrades.map((item, index) => studentInNewGrade.set(item.studentId, index));
  // eslint-disable-next-line array-callback-return
  params.map((student) => {
    if (student.id in studentInNewGrade.keys()) {
      student.grade = newGrades[studentInNewGrade.(student.id)].grade;
    } else {
      student.grade = null;
    }
  });
  return params;
}
