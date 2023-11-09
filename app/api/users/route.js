import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/(models)/Users";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req){

    try {
        const { name, email, password, category, role } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB();
        await User.create({ name, email, password: hashedPassword, category, role});
        return NextResponse.json({ message:  role + " created succesfully.", category:category}, { status: 201 });
    } catch (error) {
        return NextResponse.json(
          { message: "An error occurred while registering the user." },
          { status: 500 }
        );
    }

}