import {Router} from "express"
import {addSeatMatrixController} from "../controllers/seatMatrixController.js"


const seatMatrixRouter=new Router()

seatMatrixRouter.post('/add',addSeatMatrixController)

export default seatMatrixRouter;