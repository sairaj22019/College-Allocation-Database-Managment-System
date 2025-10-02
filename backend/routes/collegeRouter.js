import {Router} from "express"
import {getAllCollegeInfo, editCollegeInfo, addCollegeController} from "../controllers/collegeController.js"

const collegeRouter=new Router();

collegeRouter.post('/add',addCollegeController)
collegeRouter.get('/all', getAllCollegeInfo);
collegeRouter.post('/edit',editCollegeInfo);


export default collegeRouter;