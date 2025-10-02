import {Router} from "express"
import { addProgramController } from "../controllers/programController.js";
const programRouter = new Router();


programRouter.post('/add',addProgramController);

export default programRouter;