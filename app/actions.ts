"use server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import {parseWithZod} from '@conform-to/zod'
import { productSchema } from "./lib/zodSchemas";
import prisma from "./lib/db";

export async function createProduct(prevState: unknown, formData: FormData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    // if(!user || user.email !== 'trishaneww@gmail.com') {
    //     return redirect('/')
    // }

    // validate on the database
    const submission = parseWithZod(formData, {
        // passing zod schema
        schema: productSchema,
    });

    if(submission.status !== "success") {
        return submission.reply();
    }

    const flattenUrls = submission.value.images.flatMap((urlString) => urlString.split(",").map((url) => url.trim()))

    // added created product to our database
    await prisma.product.create({
        data: {
            name: submission.value.name,
            description: submission.value.description,
            status: submission.value.status,
            price: submission.value.price,
            images: flattenUrls,
            category: submission.value.category,
            isFeatured: submission.value.isFeatured,
        },
    })

    redirect('/dashboard/products')
}