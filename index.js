import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

dotenv.config();

try {
    mongoose.connect(process.env.MONGO_url).then(() => {
        console.log("database is connected");
    })
} catch (error) {
    console.log("database is not connected");
}

const PORT = process.env.PORT || 3300;

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: `server is at home route`
    });
});

app.get("/input", (req, res) => {
    const data = req.body.data;

    res.status(200).json({
        success: true,
        message: `data is ${data}`
    });
});

app.listen(PORT, () => {
    console.log(`server Running on ${PORT}`);
});

