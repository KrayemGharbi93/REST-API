const {Router} = require ('express');
const controller = require('./controller');
const router = Router();

// students URL
router.get('/',controller.getStudents);
router.post('/',controller.addStudent);


// students/:id URL
router.get('/:id',controller.getStudentById);
router.put('/:id',controller.updateStudent);
router.delete('/:name',controller.deleteStudent);


module.exports = router;

