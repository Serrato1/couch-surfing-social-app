import { NextResponse } from "next/server";
const {currentUser} = require("../../../lib/mockData.js");

export async function GET(){
    return NextResponse.json(currentUser);
}