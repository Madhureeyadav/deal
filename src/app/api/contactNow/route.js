import connectDB from '@/app/lib/mongodb';
import ContactNow from '@/app/models/contactNow';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';


export async function POST(req) {
    const { name, email, categories, price, propertyType, number } = await req.json();
    try {

        await connectDB();
        await ContactNow.create({ name, email, categories, price, propertyType, number })
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