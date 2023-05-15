import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const FooterContainer = styled.footer`
	background-color: #fff;
`;

export const FooterWrap = styled.div`
	padding: 16px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1300px;
	margin: 0 auto;
`;

export const SocialMedia = styled.section`
	max-width: 1300px;
	width: 100%;
`;

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 16px auto 0 auto;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	} ;
`;

export const SocialLogo = styled(Link)`
  color: #10242e;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const LogoCriativBox = styled.img`
	width: 100px;
	height: 100px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #10242e;
  font-size: 24px;
`;
