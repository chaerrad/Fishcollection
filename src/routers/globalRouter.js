import express from "express"
import {homepage} from "../controllers/globalcontrollers"

const globalRouter = express.Router();

globalRouter.get("/",homepage);

export default globalRouter;