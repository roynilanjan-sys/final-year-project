const { Content } = require('@angular/compiler/src/render3/r3_ast');
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');
const subjectRoutes = require('./routes/subject');
const path = require("path");

const mongoose = require("mongoose");

const app = express();
//jRx3WL5d5bV6YzBp
mongoose.connect("mongodb+srv://projectdb:jRx3WL5d5bV6YzBp@marks-evaluation-system.dmezc.mongodb.net/project?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("connected to the database!");
})
.catch(() => {
  console.log("connection failed!");
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

app.use("/api/student", userRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/api/subject", subjectRoutes);

module.exports = app;
