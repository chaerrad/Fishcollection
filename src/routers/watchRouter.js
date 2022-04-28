import express from "express"
import {watch} from "../controllers/watchcontrollers"

const watchRouter = express.Router();

watchRouter.get("/:id(\\d+)",watch);

export default watchRouter;