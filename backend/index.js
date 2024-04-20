import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";

dotenv.config();
console.log('JWT Secret Key:', process.env.JWT_SECRET_KEY);

const app = express();
const port = process.env.PORT || 6000;

const corsOptions = {
    origin:true
};

app.get('/', (req, res) => {
    res.send('API is working');
});

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Database is connected');
    } catch (err) {
        console.error('MongoDB connection failed:', err); // Log the error object for debugging
    }
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));


// Routes
app.use('/api/v1/auth', authRoute); // Route for authentication
app.use('/api/v1/users', userRoute); 
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/reviews', reviewRoute); 


app.listen(port, () => {
    connectDB();
    console.log("Server is running on port: " + port);
});
