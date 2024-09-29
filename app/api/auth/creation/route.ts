import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if(!user || user === null || !user.id) {
        throw new Error("something went wrong, could not retreive user session")
    }

    
}