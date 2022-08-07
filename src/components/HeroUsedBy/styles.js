import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const HeroUsedBySection = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  background: 'purple',
  margin: '23.4rem auto 30rem',
  marginTop: '23.4rem',
  paddingTop: '23.4rem',
  position: 'relative',
  color: 'white',
  maxWidth: '130.4rem',
  width: 'calc(100% - 4.8rem)',
});

export const HeroUsedByCopy = styled(Box)({
  marginBottom: 0,
  paddingLeft: '5.2rem',
  width: '39rem',
});
