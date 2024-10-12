import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function DeleteRoute() {
    return (
        <div className="h-[80vh] w-full flex items-center justify-center">
            <Card className="max-w-xl">
                <CardHeader>
                    <CardTitle>Are your absolutely sure?</CardTitle>
                    <CardDescription>
                        This action cannot be undone. This will permanently delete this product and remove all data from our servers
                    </CardDescription>
                </CardHeader>
                <CardFooter className="w-full flex justify-between">
                    <Button variant="secondary" asChild>
                        <Link href="/dashboard/products">Cancel</Link>
                    </Button>
                    <form>
                        <Button variant="destructive">Continue</Button>
                    </form>
                </CardFooter>
            </Card>

        </div>
    )
}