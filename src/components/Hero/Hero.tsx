import { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar';
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from './HeroElements'

const Hero = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = ():void => {
    setIsOpen(!isOpen);
  }

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
