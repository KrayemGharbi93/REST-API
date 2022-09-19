const express = require("express");
const studentsRoutes = require("./src/student/routes");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/v1/students',studentsRoutes);


app.listen(PORT, () => console.log("App is listening on PORT 3000"));