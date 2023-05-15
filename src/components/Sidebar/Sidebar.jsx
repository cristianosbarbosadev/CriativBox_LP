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

function Sidebar({ isOpen, toggle }) {
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarMenu>
				<SidebarLink to='/'>Cadastre-se</SidebarLink>
				<SidebarLink to='/'>Pizzarias parceiras</SidebarLink>
				<SidebarLink to='/'>Anuncie</SidebarLink>
			</SidebarMenu>
			<SideBtnWrap>
				<SidebarRoute to='/'>Contato</SidebarRoute>
			</SideBtnWrap>
		</SidebarContainer>
	);
}

export default Sidebar;
