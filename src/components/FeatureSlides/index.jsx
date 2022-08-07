import React, { useCallback, useRef, useEffect } from 'react';
import { Slide, SlideTitle, SlideDesc } from './styles';
export default function FeatureSlide({
  title,
  description,
  updateActiveImage,
  index,
}) {
  return (
    <Slide>
      <SlideTitle className='feature-slide-title'>{title}</SlideTitle>
      <SlideDesc className='feature-slide-description'>{description}</SlideDesc>
    </Slide>
  );
}
