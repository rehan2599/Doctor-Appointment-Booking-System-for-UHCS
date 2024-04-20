import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 8000;


const corsOptions = {
    origin: true,
};

app.get("/", (req, res) =>{
    res.send("API is working");
});

//database connection

mongoose.set('strictQuery', false); // Setting mongoose option to disable strict mode for queries

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
    }
};

//middleware

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute)

app.listen(port, () =>{
    connectDB();
    console.log("Server is running on port" + port);
});