import Employee from "../models/employe.js";

// Create employee
export function createEmployee(req, res) {
    const newEmployee = new Employee(req.body);

    newEmployee.save().then(result => {
        res.json({
            message: "Employee created successfully",
            employee: result
        });
    }).catch(err => {
        res.status(400).json({
            message: "Employee creation failed",
            error: err.message
        });
    });
}

// View all employees with pagination
export function viewEmployees(req, res) {
    // Get page and limit from query params, default page=1 and limit=10
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    Promise.all([
        Employee.countDocuments(),
        Employee.find().skip(skip).limit(limit)
    ])
    .then(([totalCount, employees]) => {
        res.json({
            totalCount,
            totalPages: Math.ceil(totalCount / limit),
            currentPage: page,
            employees
        });
    })
    .catch(() => {
        res.status(500).json({
            message: "Failed to fetch employees"
        });
    });
}


// Get single employee by ID
export function getEmployeeById(req, res) {
    const id = req.params.id;

    Employee.findById(id).then(result => {
        if (result == null) {
            res.status(404).json({
                message: "Employee not found"
            });
        } else {
            res.json({
                employee: result
            });
        }
    }).catch(() => {
        res.status(500).json({
            message: "Failed to fetch employee"
        });
    });
}

// Update employee
export function updateEmployee(req, res) {
    const id = req.params.id;

    Employee.findByIdAndUpdate(id, req.body, { new: true }).then(result => {
        if (result == null) {
            res.status(404).json({
                message: "Employee not found"
            });
        } else {
            res.json({
                message: "Employee updated successfully",
                employee: result
            });
        }
    }).catch(() => {
        res.status(500).json({
            message: "Failed to update employee"
        });
    });
}

// Delete employee
export function deleteEmployee(req, res) {
    const id = req.params.id;

    Employee.findByIdAndDelete(id).then(result => {
        if (result == null) {
            res.status(404).json({
                message: "Employee not found"
            });
        } else {
            res.json({
                message: "Employee deleted successfully"
            });
        }
    }).catch(() => {
        res.status(500).json({
            message: "Failed to delete employee"
        });
    });
}
