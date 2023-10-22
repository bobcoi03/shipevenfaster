import Pricing from "@/components/Pricing";
import { getSession, getActiveProductsWithPrices, getSubscription } from "../supabase-server";

export default async function PricingPage() {
    const [session, products, subscription] = await Promise.all([
        getSession(),
        getActiveProductsWithPrices(),
        getSubscription()
      ]);

    return (
        <Pricing
            session={session}
            user={session?.user}
            subscription={subscription}
            products={products}
        />
    )
}