import Pricing from '@/components/Pricing';
import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';
import LandingHero from '@/components/LandingHero';

export default async function PricingPage() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  return (
    <>
    <LandingHero/>
    <Pricing
      session={session}
      user={session?.user}
      products={products}
      subscription={subscription}
    />
    </>
  );
}
