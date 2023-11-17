import mongoose from "mongoose";
import dotenv from 'dotenv'
import app from "./app.js";

dotenv.config()

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