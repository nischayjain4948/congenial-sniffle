import express from "express";
import 'dotenv/config';
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.send("Hello world");
})


app.use("/user", userRoutes)



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})