import HeroSlider from './HeroSlider';

const Hero = () => {
  return (
    <section className='relative min-h-[80vh] lg:min-h-[912px] bg-hero bg-cover bg-center bg-no-repeat' id='home'>
      <div className='container mx-auto h-full'>
        {/* Slider */}
        <HeroSlider/>
      </div>
    </section>
  );
}

export default Hero;
