import express from "express";
import employees from "./db/employees.js";

const app = express();
export default app;

app.get("/", helloEmployees);

function helloEmployees(req, res) {
  res.send("Hello employees!");
}
