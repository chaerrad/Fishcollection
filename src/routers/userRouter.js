import express from "express"
import {editProfile} from "../controllers/usercontrollers"

const userRouter = express.Router();

userRouter.get("/",editProfile);


export default userRouter;