import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrdersPage() {
    return (
        <Card>
            <CardHeader className="px-7">
                <CardTitle>Orders</CardTitle>
                <CardDescription>Recent orders from your store</CardDescription>
            </CardHeader>
        </Card>
    )
}