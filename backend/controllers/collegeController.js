import path from "path";
import { fileURLToPath } from "url";
import {PrismaClient} from "../generated/prisma/index.js"
import csv from "csv-parser"
import fs from "fs";
const prima=new PrismaClient();

const getAllCollegeInfo=async (req,res)=>{
    try {
        const allCollege=await prima.college.findMany();
        let namesList=[];
        for(const college of allCollege){
            if (college && college.name) {
                namesList.push(college.name);
            }
        }
        return res.status(200).json({
            success:true,
            message:"College names fetched successfully",
            namesList
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Server error while fetching college data"
        })
    }
}

const editCollegeInfo=async (req,res)=>{
    try {
        const collegeData=req.body;
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Server error while editing college details"
        })
    }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const addCollegeController=async (req,res)=>{

}
export {getAllCollegeInfo,editCollegeInfo, addCollegeController}