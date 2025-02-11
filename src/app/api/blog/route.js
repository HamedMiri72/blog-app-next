import { connectDB } from "../../../../lib/config/db"

const {NextResponse } = require("next/server")
import {writeFile} from "fs/promises"
import BlogModel from "../../../../lib/models/BlogModel";


const LoadDB = async () => {
    await connectDB();
}

LoadDB();




//API EndPoind to get all blogs


export async function GET(request){

    const blogs = await BlogModel.find({});
    return NextResponse.json({blogs})
    
}


// API EndPoint For Updating Blogs


export async function POST(request){

    const formData = await request.formData();
    const timestamp = Date.now();


    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imageUrl = `/${timestamp}_${image.name}`;
    const blogData = {
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category: `${formData.get("category")}`,
        author: `${formData.get("author")}`,
        image: `${imageUrl}`,
        authorImg: `${formData.get("authorImg")}`
    }


    await BlogModel.create(blogData);
    console.log("Blog saved")
    // console.log(imageUrl);
    // return NextResponse.json({imageUrl})
    return NextResponse.json({success: true, msg:"blog added"})
}

