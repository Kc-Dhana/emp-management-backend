import express from "express";
import { createEmployee, deleteEmployee, getEmployeeById, updateEmployee, viewEmployees } from "../controllers/employeeController";


const employeeRouter = express.Router();

// Create a new employee
employeeRouter.post("/", createEmployee);

// View all employees
employeeRouter.get("/", viewEmployees);

// Get a single employee by ID
employeeRouter.get("/:id", getEmployeeById);

// Update employee by ID
employeeRouter.put("/:id", updateEmployee);

// Delete employee by ID
employeeRouter.delete("/:id", deleteEmployee);

export default employeeRouter;
