import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/authoptions";
import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/(models)/Users";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req){

    try {
        const { oldPassword, newPassword } = await req.json();

        if(!oldPassword || !newPassword){
            return NextResponse.json({ message: "Password fields are mandatory"}, { status: 400 });
        }

        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ message: "Not authenticated!"}, { status: 401 });
        }

        await connectMongoDB();
        const foundUser = await User.findOne({ email: session.user.email }).select("password");
        const passwordsAreEqual = await bcrypt.compare(oldPassword, foundUser.password);

        if (!passwordsAreEqual) {
            return NextResponse.json({ message: "Old password is wrong!"}, { status: 403 });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 12);

        const result = await User.updateOne(
            { email: session.user.email },
            { $set: { password: hashedPassword } }
        );

        if(!result){
            return NextResponse.json({ message: "Something wrong while update"}, { status: 403 });
        } else{
            return NextResponse.json({ message: "Password Changed successfully" }, { status: 200 });
        }

    } catch (error) {
        return NextResponse.json(
          { message: "An error occurred while password change." },
          { status: 500 }
        );
    }    

}