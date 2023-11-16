import mongoose from "mongoose";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express();

// middleware
app.use(cors())

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000

async function main() {
    try {
        await mongoose.connect(process.env.URL)

        console.log('Database connected');

        app.listen(port, () => {
            console.log(`listening at ${port}`);
        })
    } catch (error) {
        console.log('Failed to connect db', error);
    }
}

main()