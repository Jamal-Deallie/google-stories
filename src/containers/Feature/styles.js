import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const SlideImage = styled('img')({
  backgroundPosition: 'cover',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
});

export const FeatureSlidesContainer = styled(Box, {
  shouldForwardProp: prop => !'$primary',
})({
  background: 'pink',
  display: 'grid',
  girdTemplateColumns: 'repeat(2, 1fr)',
  position: 'absolute',
  //   opacity: $primary ? 0 : 1,
  transition: 'all 1s ease-in-out',
  transform: 'scale(1.3)',
  top: 0,
});

export const FeatureSlideLeft = styled(Box)({});

export const FeatureSlideRight = styled(Box)({
  height: '100vh',
  overflow: 'hidden',
  position: 'relative',
});
