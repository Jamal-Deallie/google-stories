import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const HeroCollageSection = styled('div')({
  display: 'grid',
  girdTemplateColumns: '35% 1fr 35%',
  maxWidth: '95vw',
  margin: '0 auto',
  marginBottom: '10vh',
  overflow: 'hidden',
});

export const LeftColumn = styled('div')({
  background: 'pink',
  display: 'grid',
  girdTemplateColumns: 'repeat(3, 1fr)',
  girdTemplateRows: 'repeat(6, 1fr)',
  columnGap: '2rem',
  height: '55rem',
  gridArea: '1 / 1 / span 1 / span 1',
});

export const RightColumn = styled('div')({
  gridArea: '1 / 3 / span 1 / span 1',
  background: 'aqua',
  display: 'grid',
  girdTemplateColumns: 'repeat(3, 1fr)',
  girdTemplateRows: 'repeat(6, 1fr)',
  columnGap: '2rem',
  height: '55rem',
});

export const HeroElement = styled(Box)({
  overflow: 'hidden',
  borderRadius: '2rem',
  background: 'orange',
  gridArea: '1 / 2 / span 5 / span 1;',
});
export const CollageElement = styled(Box)({});
export const Image = styled('img')({
  width: '100%',
  height: '100%',
  borderRadius: '1.6rem',
});

export const Video = styled('video')({
  width: '100%',
  height: '100%',
  borderRadius: '1.6rem',
});
