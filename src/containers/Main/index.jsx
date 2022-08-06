import { useState, useEffect } from 'react';
import { HeroContainer } from '../../containers';
import { FeatureSlides } from '../../components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

export default function MainContainer() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return loader ? (
    <div className='loader' />
  ) : (
    <div>
      <HeroContainer />
      <FeatureSlides />
      <div className='footer'>Build your ideal story today.</div>
    </div>
  );
}
