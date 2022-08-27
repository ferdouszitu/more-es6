const student = {
    name: 'Ferdous Fakir',
    age: 15,
    class: 10,
    marks: {
        math: 95,
        english: 75,
        physics: 79,
        chemistry: 65
    }
}
const marks = student.marks;
const math = student.marks.math;
// console.log(marks);
// console.log(math);

const chemistry = student['marks']['chemistry'];
// console.log(chemistry);
const subject = 'math';
const subjectMarks = student.marks[subject];
// console.log(subjectMarks);
const marks2 = student.marks.subject;
console.log(marks2);