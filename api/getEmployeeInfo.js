import express from "express";
import employees from "../db/employees.js";

const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (!Number(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  const employee = employees.find((emp) => emp.id === Number(id));

  if (!employee) {
    return res.status(404).json({ error: "Employee not found" });
  }

  res.json(employee);
});

export default router;
