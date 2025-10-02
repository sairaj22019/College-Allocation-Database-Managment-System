import { PrismaClient } from "../generated/prisma/index.js";
import { fileURLtoPath } from "path";
import path from "path";
import fs from "fs";
import csv from "csv-parser";
const prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvPath = path.join(__dirname, "departments.csv");
const addDepartmentController = async (req, res) => {
  try {
    let deptNames = [];
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on("data", (data) => {
        deptNames.push(data.department_name);
      })
      .on("end", async () => {
        await prisma.department.createMany({
          data: deptNames,
          skipDuplicates: true,
        });
      });
      return res.status(200).json({
        success:true,
        message:"Departments inserted successfully"
      })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error while adding departments",
    });
  }
};

export { addDepartmentController };
