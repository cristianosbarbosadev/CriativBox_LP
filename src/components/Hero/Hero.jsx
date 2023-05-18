import React, { useState } from 'react';
import NavBar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from './HeroElements';
import Backdrop from '@mui/material/Backdrop';
import FormRegister from '../FormResgister/FormRegister';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // const LogoTXTC = <span>Criativ</span>,
  //   LogoTXTB = <span>box</span>;

  return (
    <HeroContainer>
      <NavBar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Garanta sua fatia de economia!</HeroH1>
          <HeroP>Cadastre-se em 60 segundos</HeroP>
          <HeroBtn onClick={handleOpen}>Clique aqui</HeroBtn>
          <Backdrop
            sx={{
              backgroundColor: '#fff',
              zIndex: theme => theme.zIndex.drawer + 1,
            }}
            open={open}
            to="/FomrRegist"
            invisible={true}
          >
            <FormRegister />
          </Backdrop>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
