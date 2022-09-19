// where we gonna install all our sql queries
const getStudents = 'SELECT * FROM students';
const getStudentById = "SELECT * FROM students WHERE ID= $1"; // $1 is the parameter

const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
const addStudent = "INSERT INTO students(name,email,dob) VALUES($1,$2,$3)";

const deleteStudent = "DELETE FROM students WHERE name = $1";
const checkStudentExists = "SELECT s FROM students s WHERE s.name = $1";

const updateStudent = "UPDATE students SET name = $1 WHERE id = $2 ";

module.exports={
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,
    deleteStudent,
    checkStudentExists,
    updateStudent,
};