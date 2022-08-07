import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const HeroElement = styled(Box)({
  overflow: 'hidden',
  borderRadius: '2rem',
  display: 'grid',
});

export const CollageElement = styled(Box)({});
export const Video = styled('video')({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});
