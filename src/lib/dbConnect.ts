import mongoose from "mongoose";


type ConnectionObject = {
    isConnected?: number;
}

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Using existing connection");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})

        connection.isConnected = db.connections[0].readyState;
        console.log("DB connection state: ", connection.isConnected);
        console.log("DB connection: ", db);
        
        
        console.log("New DB connection created successfully");

    } catch (error) {
        console.error("Error in connecting to DB", error);
        process.exit(1);
    }
}

export default dbConnect;