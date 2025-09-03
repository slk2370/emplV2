import express from "express";
const router = express.Router();

import employees from "../db/employees.js";

router
  .get("/", (_, res) => {
    res.send(employees);
  })
  .post("/", (req, res) => {
    const { name } = req.body;
    const newEmployee = { id: employees.length + 1, name };
    employees.push(newEmployee);
    if (newEmployee.name) {
      return res.status(201).json(newEmployee);
    } else {
      return res.status(400).json({ error: "Name is required" });
    }
  });


export default router;
