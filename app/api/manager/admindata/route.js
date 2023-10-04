import { Connect } from '@/app/dbconfig/dbconfig';
import users from '@/app/models/usermodles';
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import Jwt from 'jsonwebtoken';


Connect()

export async function POST(req, res) {
    try {
        const reqBody = await req.json();
        const { email } = reqBody
        const user = await users.findOne({ "email": email }).select("-password");
        if (!user) {
            return NextResponse.json({
                message: "Not Founded"
            })
        }
        return NextResponse.json({
            message: "Founded" , user
        })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
