import Link from "next/link";

export default function FeatureList() {
    return (
        <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
            <p className="text-6xl font-extrabold text-center mb-20">Features</p>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div>
                    <h3 className="mb-2 text-xl font-bold">Landing Page</h3>
                    <p>- Nav, Hero, FeatureList, Pricing, FAQ, Footer components ready to go out of the box</p>
                    <p>- Uses TailwindCSS with <Link href="https://daisyui.com" target="__blank" className="underline text-blue-500">DaisyUI</Link></p>
                    <p>- 30 themes</p>
                </div>
                <div>
                    <h3 className="mb-2 text-xl font-bold">User Authentication</h3>
                    <p>- Email signups & magic link out of the box</p>
                    <p>- Can be integrated with over 16 Auth providers in minutes</p>
                    <p>- Automatically synced with Stripe customer APIs, so when a user subscribes to a plan, it is automatically reflected in your database</p>
                </div>
                <div>
                    <h3 className="mb-2 text-xl font-bold">Subscription Payments</h3>
                    <p>- Stripe APIs integration, allowing your users to choose a subscription and buy any product right away</p>
                    <p>- Pricing Component which updates in realtime according to user state and product/price changes in Stripe, by integrating webhooks</p>
                </div>
                <div>
                    <h3 className="mb-2 text-xl font-bold">Database</h3>
                    <p>- Fully open source</p>
                    <p>- Uses Postgresql and queried by Supabase's client library</p>
                    <p>- Powerful data and access management tools</p>
                </div>
                <div>
                    <h3 className="mb-2 text-xl font-bold">Email</h3>
                    <p>- Resend</p>
                    <p>- Automatically sends transactional emails</p>
                </div>
                <div>
                    <h3 className="mb-2 text-xl font-bold">Styling</h3>
                    <p>- Uses TailwindCSS with <Link href="https://daisyui.com" target="__blank" className="underline text-blue-500">DaisyUI</Link></p>
                    <p>- 30 themes</p>
                </div>
            </div>
        </div>
    )
}

function LogoCloud() {
    return (
      <div>
        <p className="mt-24 text-xs uppercase text-center font-bold tracking-[0.3em]">
          Brought to you by
        </p>
        <div className="flex flex-col items-center my-12 space-y-4 sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-5">
          <div className="flex items-center justify-start">
            <a href="https://nextjs.org" aria-label="Next.js Link">
              <img
                src="/nextjs.svg"
                alt="Next.js Logo"
                className="h-12"
              />
            </a>
          </div>
          <div className="flex items-center justify-start">
            <a href="https://vercel.com" aria-label="Vercel.com Link">
              <img
                src="/vercel.svg"
                alt="Vercel.com Logo"
                className="h-6 text-white"
              />
            </a>
          </div>
          <div className="flex items-center justify-start">
            <a href="https://stripe.com" aria-label="stripe.com Link">
              <img
                src="/stripe.svg"
                alt="stripe.com Logo"
                className="h-12 text-white"
              />
            </a>
          </div>
          <div className="flex items-center justify-start">
            <a href="https://supabase.io" aria-label="supabase.io Link">
              <img
                src="/supabase.svg"
                alt="supabase.io Logo"
                className="h-10 text-white"
              />
            </a>
          </div>
          <div className="flex items-center justify-start">
            <a href="https://github.com" aria-label="github.com Link">
              <img
                src="/github.svg"
                alt="github.com Logo"
                className="h-8 text-white"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }