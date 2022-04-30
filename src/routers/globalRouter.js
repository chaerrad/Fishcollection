import express from "express"
import {homepage,loginpage,joinpage,postlogin,postjoin} from "../controllers/globalcontrollers"

const globalRouter = express.Router();

globalRouter.get("/",homepage);
globalRouter.route("/login").get(loginpage).post(postlogin);
globalRouter.route("/join").get(joinpage).post(postjoin);

export default globalRouter;