import SwiperNavButtons from "@/components/SwiperNavButtons";

const Page = () => {
    return (
<section className="bg-primary-300 text-white py-24 px-4 md:px-8">
  <div className="container mx-auto max-w-3xl">
    <h5 className="text-3xl font-bold text-center mt-11 mb-8 leading-snug">
    Lifting weights to lower blood sugar levels
    </h5>
    <p className="text-lg leading-8 mb-6">
    Blood sugar levels should be 3.3-5.0 mmol/L. 
    High blood sugar levels more than 16.7mmol can lead to excess thirst, excess urination, 
    and weight loss which can lead to serious complications for the liver, heart, and brain – common to have amputated limbs due to high blood sugar levels.
    </p>
    <p className="text-lg leading-8 mb-6">
    The best way to lower blood sugar levels for type 2 diabetes is lifestyle; 
    150 mins/week of moderate exercise + Canada food guide plate method (half of the plate vegetables, ¼ protein, ¼ carbs) eating every 4-6 hours with the plate model. 
    Type 1 diabetes require medications to produce insulin and regulate blood sugar levels. 

    </p>
    <p className="text-lg leading-8 mb-6">
    Resistance training increases insulin sensitivity in the cells. 
    Imagine insulin is a key and every cell has a lock (receptors). 
    Lifting weights increases the lock size so that insulin key can be used to draw the blood sugar from the 
    blood into the cells = lowering blood sugar levels when you poke your finger or check the glucose monitor on your phone. 

    </p>
    <p className="text-lg leading-8 mb-6">
    The best way to lower blood sugars would be the combo of 150 mins/week of moderate exercise + Canada food guide plate method + Resistance training.

    </p>
    <p className="text-lg leading-8 mb-6">
    Lifting weights aka Resistance training such as lifting dumbbells, using weight machines, elastic/rubber bands and body weight exercises. 
    All are ways to build muscle tone – for cardiac patients, metabolic conditions and those in remission; 
    Muscular Endurance is recommended 10-15 repetitions 2-3 sets, twice a week on non-consecutive days. 
    </p>
    <p className="text-lg leading-8 mb-6">    
    Ideally resistance exercises : 3-6 exercises should include
    </p>
        <ul className="list-disc pl-6 text-lg leading-8">
            <li>Push: push up, front/side shoulder raises, shoulder press </li>
            <li>Pull: one arm row, resistance band row, tearing band apart T-row</li>
            <li>Squat: goblet, body weight, sit to stand</li>
            <li>Bend: deadlift, single leg balance exercises, airplanes</li>
            <li>Carry: farmers carry, dumbbell exercises</li>
        </ul>
                {/* Swiper Navigation Buttons */}
                <div className="flex justify-center my-8">
              <SwiperNavButtons
                containerStyles="flex gap-4"
                btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
                iconStyles="text-2xl"
                leftPath="/blog/september19" 
              />
            </div>
  </div>
</section>

    );
};

export const runtime = 'edge';

export default Page;
