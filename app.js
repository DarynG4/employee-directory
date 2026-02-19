import express from "express";
import employees from "./db/employees.js";

const app = express();
export default app;

app.get("/", helloEmployees);
app.get("/employees", getEmployees);

function helloEmployees(req, res) {
  res.send("Hello employees!");
}

function getEmployees(req, res) {
  res.send(employees);
}
