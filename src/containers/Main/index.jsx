import { useState, useEffect } from 'react';
import { HeroContainer, FeatureContainer } from '../../containers';
import { FeatureSlides } from '../../components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { Loader, Footer } from './styles';

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
    <Loader />
  ) : (
    <div>
      <HeroContainer />
      <FeatureContainer />
      <Footer>Build your ideal story today.</Footer>
    </div>
  );
}
