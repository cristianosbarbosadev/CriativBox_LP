import styled from 'styled-components';

export const PresentationContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #f46f0a;
  color: #fff;
`;
export const PresentationHeading = styled.h1`
	font-size: clamp(2rem, 2.5vw, 3rem);
	text-align: center;
	margin-bottom: 5rem;
`;

export const PresentationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const PresentationCard = styled.div`
  margin: 32px 32px;
  line-height: 2;
  width: 300px;
  border-radius: 10px;
  transition: 0.2s ease;
  background: white;
  color: #10242e;

`;

export const PresentationTitle = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  padding: 5px;
  color: #f46f0a;
`;

export const PresentationInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const PresentationDesc = styled.p`
  margin-bottom: 1rem;
`;



