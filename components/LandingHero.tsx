import Link from "next/link";

export default function LandingHero() {
    return (
        <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-6xl font-extrabold">From idea to SaaS in hours.</h1>
                        <p className="py-6">We've built a landing page template, Stripe subscription integration with user authentication and database integration with Supabase, so you can focus on building features for your customers.</p>
                        <Link className="btn btn-primary h-8" href="/signin">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}