// for the logic
const pool = require('../../db');
const queries = require('./queries');


const getStudents = (req,res) => {
    pool.query(queries.getStudents,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const getStudentById = ((req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
});

const addStudent = (req,res) =>{
    const {name,email,dob} = req.body;

    //check email if exists and if so, then add
    pool.query(queries.checkEmailExists,[email],(error,results)=>{
        if (results.rows.length){ // this is not a good way to check
            res.send('email already exists');
        }

        // add student to db
        pool.query(queries.addStudent,[name,email,dob],(error,results)=>{
            if(error) throw error;
            res.status(201).send("student created successfully");
            console.log("Student created");
        })
    })

};

const deleteStudent = (req,res)=>{
    const name = req.params.name;
    //check if student in db
    pool.query(queries.checkStudentExists,[name],(error,results)=>{
        if(!results.rows.length){
            res.send("Student does not exists in the databse");
        } // else we delete it
        pool.query(queries.deleteStudent,[name],(error,results)=>{
            if (error) throw error;
            res.status(200).send("Student deleted");
        })
    })
    
};

const updateStudent = (req,res)=>{
    const {name} = req.body;
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id],(error,results)=>{
        if(!results.rows.length){
            res.send("Student does not exists in the databse");
        }
        pool.query(queries.updateStudent,[name,id],(error,results)=>{
            if(error) throw error;
            res.status(200).send("student updated successfully")
        })
    })
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudent,
    updateStudent,
};