import {Router} from "express"
import { addDepartmentController } from "../controllers/departmentController.js";

const departmentRouter = new Router()

departmentRouter.get('/add',addDepartmentController)

export default departmentRouter;