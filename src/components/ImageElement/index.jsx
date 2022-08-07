import { HeroElement, CollageElement, Image } from './styles';

export default function ImageElement({ src }) {
  return (
    <HeroElement className='hero-element'>
      <Image src={src} className='collage-element' alt='' />
    </HeroElement>
  );
}
