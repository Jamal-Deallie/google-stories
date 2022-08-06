import {
  HeroCollage,
  HeroFooter,
  HeroUsedBy,
  HeroPhoneBlock,
  HeroHeader,
} from '../../components';

export default function HeroContainer() {
  return (
    <div className='hero-container'>
      <HeroHeader />
      <div className='hero-media'>
        <HeroCollage />
        <HeroPhoneBlock />
      </div>
      <HeroUsedBy />
      <HeroFooter />
    </div>
  );
}
