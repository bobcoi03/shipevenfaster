export default function FAQ() {
    return (
        <div className="max-w-5xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
            <p className="text-6xl font-extrabold text-center mb-10 mt-10">Frequently Asked Questions</p>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3"/> 
                <div className="collapse-title text-xl font-medium">
                    What do I get exactly?
                </div>
                <div className="collapse-content"> 
                    <p>You get access to a GitHub Repository with the code to this website. Once you have access you can clone it on your machine and do anything to it. It's yours forever.</p>
                </div>
            </div>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3"/> 
                <div className="collapse-title text-xl font-medium">
                    Is it a one time purchase?
                </div>
                <div className="collapse-content"> 
                    <p>Yes! You pay once and have access to the code forever. You are free to do whatever you want with it.</p>
                </div>
            </div>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    What technology stack is used?
                </div>
                <div className="collapse-content"> 
                    <p>TypeScript, Next.js (App router), Stripe for subscription payments, Supabase for authentication and database, DaisyUI (TailwindCSS) for styling and themes</p>
                </div>
            </div>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    Can I get a refund?
                </div>
                <div className="collapse-content"> 
                    <p>Unfortunately we don't offer refunds as once you pay, you'll have access to the code and we can't reverse that.</p>
                </div>
            </div>
        </div>
    )
}