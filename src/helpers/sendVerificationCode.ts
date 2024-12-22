import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationCode(
    email: string,
    username: string,
    code: string
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'Subham Rahar <onboarding@resend.dev>',
            to: email,
            subject: 'Feedback Message Verification Code',
            react: VerificationEmail({ username, otp: code }),
        });
        return {
            success: true,
            message: "Verification code sent successfully",
        }
    } catch (error) {
        console.log("Error in sending verification code", error);
        return {
            success: false,
            message: "Error in sending verification code",
        };
    }
}