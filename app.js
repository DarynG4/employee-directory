import express from "express";
import employees from "./db/employees.js";

const app = express();
export default app;

app.get("/", helloEmployees);
app.get("/employees", getEmployees);
app.get("/employees/:id", getEmployeeById);

function helloEmployees(req, res) {
  res.send("Hello employees!");
}

function getEmployees(req, res) {
  res.send(employees);
}

function getEmployeeById(req, res) {
  const id = Number(req.params.id);
  const employee = employees.find((employee) => employee.id === id);
  if (employee === undefined) {
    return res
      .status(404)
      .send("That employee does not exist within our database.");
  }
  res.send(employee);
}
