import { useEffect, useRef } from 'react';
import { HeroPhoneSection, HeroPhoneTemplate, Video } from './styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoSrc from '../../assets/images/web-stories-hero-video-center-2.mp4';

export default function HeroPhoneBlock() {
  const ref = useRef();
  useEffect(() => {
    let targets = gsap.utils.toArray('#hero-phone');
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      delay: 0.5,
    });
    tl.fromTo(
      targets,
      { y: 300, opacity: 0 },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ref.current,
          markers: true,
        },
      }
    );
  }, [ref]);
  return (
    <HeroPhoneSection ref={ref}>
      <HeroPhoneTemplate id='hero-phone'>
        <Video
          className='collage-element'
          playsInline=''
          autoPlay
          loop
          muted
          webkit-playsinline=''
          id='video'>
          <source src={videoSrc} type='video/mp4' />
        </Video>
      </HeroPhoneTemplate>
    </HeroPhoneSection>
  );
}
