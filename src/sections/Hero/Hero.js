import { PrimaryButton } from '../../comp/index';
import './Hero.css';
const Hero = () => {
  return (
    <div className='hero-main'>
      <div className='hero-text'>
        <h6 className='hero-subtitle'>Welcome To Cyborg</h6>
        <h4 className='hero-title'><em>BROWSE</em>  OUR POPULAR GAMES HERE</h4>
        <PrimaryButton>Browser Now</PrimaryButton>
        
      </div>
    </div>
  );
}

export default Hero;
