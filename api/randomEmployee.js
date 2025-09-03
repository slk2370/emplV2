import express from "express";
import employees from "../db/employees.js";

const router = express.Router();

router.get("/", (_, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  res.json(randomEmployee);
});

export default router;
