import {PrismaClient} from "../generated/prisma/index.js"

const prisma=new PrismaClient();

const getPreferences=async(req,res)=>{
    try {
        const studentId=req.params.id;
        if(!studentId){
            return res.status(400).json({
                success:false,
                message:"Provide the user ID"
            })
        }
        const allPreferences=await prisma.preferences.findMany({
            where:{
                student_id:parseInt(studentId,10)
            },
            include:{
                programID:{
                    include:{
                        collegeID:true,
                        deptID:true
                    }
                }
            }
        })
        return res.json({
            success:true,
            message:"Preferences fetched successfully",
            preference:allPreferences
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:true,
            messsge:"Server error while fetching preferences",
            error
        })
    }
}

const addPreferences=async(req,res)=>{
    try {
        const data=req.body;
        if(!data.studentId || !data.preferences || !Array.isArray(data.preference)){
            return res.status(400).json({
                success:false,
                message:"Invalid input data"
            })
        }
        const prog=await prisma.program.findMany({
            where:{
                college_id:{}
            }
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            messsage:"Server error while saving preferences",
            error
        })
    }
}


export{getPreferences,addPreferences}