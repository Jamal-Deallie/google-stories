import { styled } from '@mui/system';
import { Box } from '@mui/material';
import imageSrc from '../../assets/images/hero-phone-frame-v2.png';

export const HeroPhoneSection = styled(Box)({
  position: 'absolute',
  top: 0,
  left: '50%',
  width: '364px',
  height: '650px',
  transform: 'translateX(-40%) scale(1.5)',
  marginLeft: '1rem',
});
export const HeroPhoneTemplate = styled(Box)({
  backgroundImage: `url(${imageSrc})`,
  backgroundPosition: 'center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',

});

export const Video = styled('video')({
  position: 'absolute',
  width: '64%',
  height: 'auto',
  top: '5%',
  left: '9%',
  borderRadius: '2rem',
  overflow: 'hidden',
});
