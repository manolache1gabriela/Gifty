import Hero from './Hero';
import More from './More';

interface HomeProps {
  toggleAnimation: () => void;
  toggleSecondAnimation: () => void;
}

export default function Home({
  toggleAnimation,
  toggleSecondAnimation,
}: HomeProps) {
  return (
    <div className='w-full relative h-[84vh] xl:h-[88.4vh] bg-[url("./assets/splash.jpg")] bg-cover flex'>
      <Hero toggleAnimation={toggleAnimation} />
      <More toggleSecondAnimation={toggleSecondAnimation} />
    </div>
  );
}
