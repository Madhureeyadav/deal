import connectDB from "@/app/lib/mongodb";
import booking from "@/app/models/booking";
import { NextResponse } from "next/server";
import mongoose from 'mongoose'; // Add this line to import mongoose

export async function POST(req) {
    const { name, mobileNo, propertyName, location,date } = await req.json();

    try {
        await connectDB();
        await booking.create({ name, mobileNo, propertyName, location,date});

        return NextResponse.json({
            msg: ["Message sent successfully"],
            success: true,
        });
    } catch (error) {
        console.error("Error:", error);

        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            console.log(errorList);
            return NextResponse.json({ msg: errorList, success: false });
        }

        return NextResponse.json({
            msg: [`An error occurred while processing your request: ${error.message || 'Unknown error'}`],
            success: false,
        });
    }
}
