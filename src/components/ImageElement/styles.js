import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const HeroElement = styled(Box)({
  overflow: 'hidden',
  borderRadius: '2rem',
  background: 'orange',
  gridArea: '1 / 2 / span 5 / span 1;',
});
export const CollageElement = styled(Box)({});
export const Image = styled('img')({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});
