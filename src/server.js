import express from "express";
import logger from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import watchRouter from "./routers/watchRouter";
const app = express();
const PORT = 4000;

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT} 🚀`);

app.use(logger("dev"));
app.use("/",globalRouter);
app.use("/user",userRouter);
app.use("/watch",watchRouter);

const handelHome = (req,res) => {
  return res.end();
}


app.listen(PORT, handleListening);
