import React from 'react';
import {
  PresentationContainer,
  PresentationHeading,
  PresentationWrapper,
  PresentationCard,
  PresentationInfo,
  PresentationTitle,
  PresentationDesc,
} from './PresentationElements';

function Presentation({ heading, data }) {
  return (
    <PresentationContainer>
      <PresentationHeading>{heading}</PresentationHeading>
      <PresentationWrapper>
        {data.map((presentation, index) => {
          return (
            <PresentationCard key={index}>
              <PresentationInfo>
                <PresentationTitle>{presentation.name}</PresentationTitle>
                <PresentationDesc>{presentation.desc}</PresentationDesc>
              </PresentationInfo>
            </PresentationCard>
          );
        })}
      </PresentationWrapper>
    </PresentationContainer>
  );
}

export default Presentation;
