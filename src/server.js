import express from "express";
import logger from "morgan";
import "./db";
import Login from "./models/login";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import watchRouter from "./routers/watchRouter";
const app = express();
const PORT = 5000;

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT} 🚀`);

app.set("view engine","pug");
app.set("views", process.cwd()+"/src/views");
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));


app.use("/",globalRouter);
app.use("/user",userRouter);
app.use("/watch",watchRouter);

const handelHome = (req,res) => {
  return res.end();
}


app.listen(PORT, handleListening);
