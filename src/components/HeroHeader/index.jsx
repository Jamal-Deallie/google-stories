import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { HeroTextSection } from './styles';
import { gsap } from 'gsap';

export default function HeroHeader() {
  useEffect(() => {
    gsap.fromTo(
      '#hero-text',
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 0.2 }
    );
  }, []);
  return (
    <HeroTextSection>
      <Typography
        id='hero-text'
        sx={{
          fontSize: '4vw',
          fontWeight: 600,
          display: 'inline-block',
          lineHeight: '1',
        }}>
        Stories meet their wides audience ever
      </Typography>
    </HeroTextSection>
  );
}
