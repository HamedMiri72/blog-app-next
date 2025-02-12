import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/config/db";
import EmailModel from "../../../../lib/models/EmailModel";

const LoadDB = async ()=> {
    await connectDB();
}

LoadDB();

export async function POST(requeest){
    const formData = await requeest.formData();
    const emailData = {
        email:`${formData.get("email")}`,
    }
    await EmailModel.create(emailData);
    return NextResponse.json({success:true, msg: "email subscribed"})
}