import Link from "next/link";

const Page = () => {
    return (
<section className="bg-primary-300 text-white py-24 px-4 md:px-8">
  <div className="container mx-auto max-w-3xl">
    <h5 className="text-3xl font-bold text-center mt-11 mb-8 leading-snug">
    1-on-1 Individualized Training. 
    </h5>
    <p className="text-lg leading-8 mb-6">
    Whether your goal is to lose weight, build strength, or simply benefit from personalized attention, our 1-on-1 training sessions can help you reach your goals faster. 
    Available online or in-person (location dependent), our trainers are certified kinesiologists and exercise physiologists, ensuring expert guidance at all times. 
    Single and group sessions are available.
    </p>
    <h6 className='text-2xl font-bold text-center mt-11 mb-8 leading-snug'>
              Training Packages:
            </h6>
            <ul className="list-disc pl-6 text-lg leading-8 cursor-pointer ">
              <Link href={`https://buy.stripe.com/00g9Co4r9foX9nG7sw`}>
                <li className='hover:text-accent transition-all'>1 session: $80 </li>
              </Link>
              <Link href={`https://buy.stripe.com/28o4i4g9RccL6buaEJ`}>
                <li className='hover:text-accent transition-all'>3 sessions: $240</li>
              </Link>
              <Link href={`https://buy.stripe.com/28oeWI2j15On2Zi28h`}>
                <li className='hover:text-accent transition-all'>5 sessions: $380</li>
              </Link>
              <Link href={`https://buy.stripe.com/9AQ4i49LtekTczS006`}>
                <li className='hover:text-accent transition-all'>10 sessions: $700<span className="text-secondary-400">(save $100)</span></li>
              </Link>
              <Link href={`https://buy.stripe.com/5kAaGsbTBekT2ZiaEL`}>
                <li className='hover:text-accent transition-all'>20 sessions: $1,400<span className="text-secondary-400">(save $200)</span></li>
              </Link>
            </ul>
  </div>
</section>

    );
};

export const runtime = 'edge';

export default Page;