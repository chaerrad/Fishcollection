import express from "express";
import logger from "morgan";
import globalRouter from "./routers/globalRouter";
const app = express();
const PORT = 4000;

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT} 🚀`);

app.use(logger("dev"));
app.use("/",globalRouter);

const handelHome = (req,res) => {
  return res.end();
}


app.listen(PORT, handleListening);
