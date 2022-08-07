import { useState, useRef, useEffect } from 'react';
import { featureSlides } from '../../shared/data';
import { FeatureSlides } from '../../components';
import {
  SlideImage,
  FeatureSlideLeft,
  FeatureSlideRight,
  FeatureSlidesContainer,
} from './styles';

function RenderImages({ activeFeatureIndex }) {
  return featureSlides.map(({ imageUrl }, index) => (
    <SlideImage
      $primary={activeFeatureIndex === index}
      key={imageUrl}
      sx={{ backgroundImage: `url(${imageUrl})` }}
    />
  ));
}

export default function FeatureContainer() {
  const featureSlider = useRef();
  const featureSlideRight = useRef();

  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  return (
    <FeatureSlidesContainer
      ref={featureSlider}
      className='feature-slides-container'>
      <FeatureSlideLeft className='feature-slides-left'>
        {featureSlides.map((feature, index) => (
          <FeatureSlides
            updateActiveImage={setFeatureIndex}
            key={feature.imageUrl}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </FeatureSlideLeft>
      <FeatureSlideRight
        ref={featureSlideRight}
        className='feature-slides-right'>
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
      </FeatureSlideRight>
    </FeatureSlidesContainer>
  );
}
