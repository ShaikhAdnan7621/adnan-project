import { NextResponse } from "next/server";


const { Connect } = require("@/app/dbconfig/dbconfig");
Connect();

export async function GET(req) {
    try {
        const userId = await getdatafromtoken(req);
        console.log(req);

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}