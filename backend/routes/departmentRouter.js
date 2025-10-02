import {Router} from "express"
import { addDepartmentController } from "../controllers/departmentController.js";

const departmentRouter = new Router()

departmentRouter.post('/add',addDepartmentController)

export default departmentRouter;