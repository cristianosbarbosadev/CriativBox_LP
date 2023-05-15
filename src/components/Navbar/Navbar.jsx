import React from 'react';
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements';
import { HeroLCH1, HeroLBH1 } from '../Hero/HeroElements';

function NavBar({ toggle }) {
	return (
    <>
      <Nav>
        <NavLink to="/">Seja um Parceiro{""}<HeroLCH1>Criativ</HeroLCH1>{""}<HeroLBH1>Box</HeroLBH1></NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}

export default NavBar;
