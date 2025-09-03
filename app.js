import express from "express";
const app = express();
export default app;
import employeesRouter from "./api/employees.js";
import getEmployeeInfoRouter from "./api/getEmployeeInfo.js";
import randomEmployeeRouter from "./api/randomEmployee.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Employee!");
});
app.use("/employees", employeesRouter);
app.use("/employees", getEmployeeInfoRouter);
app.use("/random", randomEmployeeRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err, "Sorry, something broke!");
});
