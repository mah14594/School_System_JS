/**
 * You are working for a school where you want to get some numbers.
 * You have 3 lists, classes, students, and studentMarks
 *
 * The classes list contains data for each class
 * The students list contains data for each student
 * The studentMarks list contains marks data of the students
 *
 * Write functions to:
 * 1- Find the avg marks of a specific student by passing the student id
 * 2- Find the top student in a specific class by passing the class id
 * 3- Find the avg marks in a specific class by mpassing the class id
 * 4- Print the name of the top student in the school
 *
 * Examples:
 * - findAvg(1); // answer: (18/20)
 * - findTopStudent(1); // answer: Ahmad
 * - findAvgMarkInClass(1); // answer: (17/20)
 * - findTopStudentInSchool(); //answer: Ahmad
 */

const classes = [
  { id: 1, name: "9th Grade", students: [1, 2] },
  { id: 2, name: "10th Grade", students: [3, 4] },
];
const students = [
  { id: 1, name: "Ahmad", age: 14 },
  { id: 2, name: "Mohammad", age: 14 },
  { id: 3, name: "Zaid", age: 15 },
  { id: 4, name: "Mustafa", age: 16 },
];
const studentMarks = [
  { id: 1, studentId: 1, mark: 20, max: 20, min: 12 },
  { id: 2, studentId: 2, mark: 19, max: 20, min: 12 },
  { id: 3, studentId: 3, mark: 12, max: 20, min: 12 },
  { id: 4, studentId: 4, mark: 13, max: 20, min: 12 },
  { id: 5, studentId: 1, mark: 16, max: 20, min: 12 },
  { id: 6, studentId: 2, mark: 13, max: 20, min: 12 },
  { id: 7, studentId: 3, mark: 17, max: 20, min: 12 },
  { id: 8, studentId: 4, mark: 18, max: 20, min: 12 },
];
function findAvg(studentId) {
  const studentArray = studentMarks.filter(
    (item) => item.studentId === studentId
  );
  let sumMarks = 0;
  studentArray.forEach((student) => (sumMarks += student.mark));
  const studentAvg = sumMarks / studentArray.length;
  return studentAvg;
}
// i make new function to get all marks in class for a given class ID because i used it in two functions , to avoid duplication
function getAvgs(classId) {
  let avgsInClass = [];
  const targetClass = classes.filter((cl) => cl.id === classId);
  const studentsInClass = targetClass[0].students;
  studentsInClass.forEach((student) => avgsInClass.push(findAvg(student)));
  return avgsInClass;
}
function findTopStudent(classId) {
  const avgsInClass = getAvgs(classId);
  const sortedAvgsInClass = avgsInClass.sort((a, b) => b - a);
  const topAvgInClass = sortedAvgsInClass[0];
  const topStudent = students.filter(
    (student) => findAvg(student.id) === topAvgInClass
  ); //return array of students (if there are more than one student scored the top average)
  console.log(topStudent);
  return topStudent;
}
findTopStudent(1);

function findAvgMarkInClass(classId) {
  let sumClassMarks = 0;
  const avgsInClass = getAvgs(classId);
  avgsInClass.forEach((mark) => (sumClassMarks += mark));
  const avgMarkInClass = sumClassMarks / avgsInClass.length;
  console.log(avgMarkInClass);
  return avgMarkInClass;
}
findAvgMarkInClass(2);
function findTopStudentInSchool() {
  let allStudentsAvgs = [];
  students.forEach((student) => allStudentsAvgs.push(findAvg(student.id)));
  const allStudentsAvgSorted = allStudentsAvgs.sort((a, b) => b - a);
  const topAvg = allStudentsAvgSorted[0];
  const topStudent = students.filter(
    (student) => findAvg(student.id) === topAvg
  ); //return array of students (if there are more than one student scored the top average)

  console.log(topAvg);
  console.log(topStudent);
  return topStudent;
}
findTopStudentInSchool();
