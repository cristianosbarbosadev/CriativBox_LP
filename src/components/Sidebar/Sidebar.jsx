import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SideBarElements';
import Backdrop from '@mui/material/Backdrop';
import FormRegister from '../FormResgister/FormRegister';

function Sidebar({ isOpen, toggle }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleAnuncieClick = () => {
    window.open('https://www.criativbox.com.br/', '_blank'); // Redirecione para a página de anúncios
  };

  const handleContatoClick = () => {
    window.open('https://www.criativbox.com.br/#contact', '_blank'); // Redirecione para a página de contato
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink onClick={handleOpen}>Cadastre-se</SidebarLink>
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
        <SidebarLink to="/">Pizzarias parceiras</SidebarLink>
        <SidebarLink onClick={handleAnuncieClick}>Anuncie</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute onClick={handleContatoClick}>Contato</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
}

export default Sidebar;
