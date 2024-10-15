import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function BannerRoute() {
    return  (
        <>
        <div className="flex items-center justify-end">
            <Button asChild className="flex gap-x-2">
                <Link href="/dashboard/banner/create">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span>Add Banner</span>
                </Link>
            </Button>
        </div>


        <Card className="mt-5">
            <CardHeader>
                <CardTitle>Banners</CardTitle>
                <CardDescription>Manage your banners</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead className="text-end">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                </Table>
            </CardContent>
        </Card>
        </>
    )
}