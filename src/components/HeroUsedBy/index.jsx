import { HeroUsedBySection, HeroUsedByCopy } from './styles';
import { Typography } from '@mui/material';

export default function HeroUsedBy() {
  return (
    <HeroUsedBySection className='hero-usedBy'>
      <HeroUsedByCopy className='hero-usedBy-copy'>
        <Typography
          sx={{ fontSize: '2rem', lineHeight: '1.2', fontWeight: 400 }}>
          The tappable story format has never been more accessible—to creators
          and readers alike. See what happens when Google brings stories to the
          open web.
        </Typography>
      </HeroUsedByCopy>
      <div className='hero-usedBy-logos'>
        <Typography
          sx={{ fontSize: '1.6rem', lineHeight: '1.2', fontWeight: 400 }}>
          Making an impact at
        </Typography>
      </div>
    </HeroUsedBySection>
  );
}
