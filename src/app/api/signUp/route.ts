import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/Users";
import bcrypt from "bcryptjs";
import { sendVerificationCode } from "@/helpers/sendVerificationCode";
import { log } from "node:console";

export async function POST (request: Request){
    await dbConnect();

    try {
        const { username, email, password } = await request.json();
        
    } catch (error) {
        console.log("Error in creating user", error);
        return Response.json(
            {
                success: false,
                message: "Error in creating user"
            },
            {
                status: 500
            }
        )
    }
}