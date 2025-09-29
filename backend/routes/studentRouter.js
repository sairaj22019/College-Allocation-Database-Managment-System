import {Router} from "express"
import {addStudentController} from "../controllers/studentController.js"
const studentRouter=new Router();

studentRouter.get('/add',addStudentController)

export default studentRouter;