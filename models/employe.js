import mongoose from "mongoose";

const employeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    joinDate: {
      type: Date,
      default: Date.now,
    },
    profileImage: {
      type: String, // URL or filename
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
