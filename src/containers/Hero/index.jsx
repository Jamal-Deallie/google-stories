import {
  HeroCollage,
  HeroFooter,
  HeroUsedBy,
  HeroPhoneBlock,
  HeroHeader,
} from '../../components';
import { HeroSection, HeroMedia } from './styles';

export default function HeroContainer() {
  return (
    <HeroSection className='hero-container'>
      <HeroHeader />
      <HeroMedia className='hero-media'>
        <HeroCollage />
        <HeroPhoneBlock />
      </HeroMedia>
      <HeroUsedBy />
      <HeroFooter />
    </HeroSection>
  );
}
