import { HeroElement, CollageElement, Video } from './styles';

export default function VideoElement({ src }) {
  return (
    <HeroElement>
      <Video
        className='collage-element'
        playsInline=''
        autoPlay
        loop
        muted
        webkit-playsinline=''
        id='video'>
        <source src={src} type='video/mp4' />
      </Video>
    </HeroElement>
  );
}
