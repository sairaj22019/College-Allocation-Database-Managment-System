import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import csv from "csv-parser";
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvPath = path.join(__dirname, "seat_details.csv");

const addSeatMatrixController = async (req, res) => {
  try {
    const results = [];

    fs.createReadStream(csvPath)
      .pipe(
        csv({
          // Trim headers so " program_id" -> "program_id"
          mapHeaders: ({ header }) => header.trim(),
        })
      )
      .on("data", (row) => {
        // Trim all values before converting
        const cleaned = {
          program_id: Number(row.program_id?.trim()),
          category_id: Number(row.category_id?.trim()),
          total_seats: Number(row.total_seats?.trim()),
        };

        results.push(cleaned);
      })
      .on("end", async () => {
        try {
          const batchSize = 100;

          for (let i = 0; i < results.length; i += batchSize) {
            const batch = results.slice(i, i + batchSize);

            await prisma.seat_Matrix.createMany({
              data: batch,
              skipDuplicates: true,
            });
          }

          return res.status(200).json({
            success: true,
            message: "Seat matrix added successfully",
          });
        } catch (error) {
          console.error("Error inserting seat matrix:", error);
          return res.status(500).json({
            success: false,
            message: "Error while adding seat matrix",
          });
        }
      })
      .on("error", (err) => {
        console.error("CSV read error:", err);
        return res.status(500).json({
          success: false,
          message: "Error reading CSV file",
        });
      });
  } catch (error) {
    console.error("Controller error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while inserting seat matrix",
      error,
    });
  }
};

const getSeatMatrixData=async(req,res)=>{
  try {
    const data=req.body;
    
  } catch (error) {
    
  }
}


export { addSeatMatrixController, getSeatMatrixData };
