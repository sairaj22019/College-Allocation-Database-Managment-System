import {Router} from "express"
import {createCategory} from "../controllers/categoryController.js"

const categoryRouter=new Router();


categoryRouter.post('/create',createCategory);

export default categoryRouter;