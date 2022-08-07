import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageElement, VideoElement } from '../../components';
import { videos, photos } from '../../shared/data';
import { Box } from '@mui/material';
import {
  HeroCollageSection,
  LeftColumn,
  RightColumn,
  Image,
  Video,
} from './styles';

export default function HeroCollage({ children }) {
  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length);
  const [leftVideo, rightVideo] = videos;
  const ref = useRef();

  useEffect(() => {
    let targets = gsap.utils.toArray('#hero-element');
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
    <HeroCollageSection id='hero-collage' ref={ref}>
      <LeftColumn>
        <Box
          id='hero-element'
          sx={{
            gridArea: '2 / 1 / span 5 / span 1',
            overflow: 'hidden',
            borderRadius: '2rem',
          }}>
          <Image src={leftImages[0]} alt='' />
        </Box>
        <Box
          id='hero-element'
          sx={{
            gridArea: '1 / 2 / span 5 / span 1',
            overflow: 'hidden',
            borderRadius: '2rem',
          }}>
          <Image src={leftImages[1]} alt='' />
        </Box>
        <Box
          sx={{
            gridArea: '2 / 3 / span 6 / span 1',
            overflow: 'hidden',
            borderRadius: '2rem',
          }}>
          <Box id='hero-element'>
            <Video
              className='collage-element'
              playsInline=''
              autoPlay
              loop
              muted
              webkit-playsinline=''
              id='video'>
              <source src={leftVideo} type='video/mp4' />
            </Video>
          </Box>
        </Box>
      </LeftColumn>
      <Box
        sx={{
          width: '45rem',
          gridArea: '1 / 2 / span 1 / span 1',
        }}
      />
      <RightColumn>
        <Box
          sx={{
            gridArea: '2 / 1 / span 5 / span 1',
            overflow: 'hidden',
          }}>
          <Box id='hero-element'>
            <Video
              className='collage-element'
              playsInline=''
              autoPlay
              loop
              muted
              webkit-playsinline=''
              id='video'>
              <source src={rightVideo} type='video/mp4' />
            </Video>
          </Box>
        </Box>
        <Box
          id='hero-element'
          sx={{
            gridArea: '1 / 2 / span 5 / span 1',
            overflow: 'hidden',
            borderRadius: '2rem',
          }}>
          <Image src={rightImages[0]} alt='' />
        </Box>
        <Box
          id='hero-element'
          sx={{
            gridArea: '2 / 3 / span 6 / span 1',
            overflow: 'hidden',
            borderRadius: '2rem',
          }}>
          <Image src={rightImages[1]} alt='' />
        </Box>
      </RightColumn>
    </HeroCollageSection>
  );
}

{
  /* <HeroElement className='hero-element'>
<Image src={src} className='collage-element' alt='' />
</HeroElement> */
}
