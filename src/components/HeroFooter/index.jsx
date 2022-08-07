import { useRef, useEffect } from 'react';
import { Typography } from '@mui/material';
import { HeroTextSection } from './styles';

export default function HeroFooter() {
  const phoneRef = useRef();
  return (
    <HeroTextSection div ref={phoneRef} className='hero-text-section'>
      <Typography
        sx={{ fontSize: '4vw', fontWeight: 600, display: 'inline-block', lineHeight: '1'}}>
        Visual stories that feel like yours, because they are.
      </Typography>
    </HeroTextSection>
  );
}
