import express from "express";
import 'dotenv/config';
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get('/hello', (req, res) => {
    res.json({ msg: "Hello world!!" });
})

app.get("/baby", (req, res) => {
    res.status(200).json({ msg: "I love you!" });
})


app.use("/user", userRoutes)



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})