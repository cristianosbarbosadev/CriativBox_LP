import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import {
  FormRegisterThanksContainer,
  FormRegisterThanksHeading,
  Icon,
  CloseIcon,
} from './FormRegisterElements';




function Thanks() {

  

  const handleClose = () => {
    window.location.href="http://pizzaria.criativbox.com.br/";
  };

  return (
    <Route>
    <FormRegisterThanksContainer>
      <Icon onClick={handleClose}>
        <CloseIcon />
      </Icon>
      <FormRegisterThanksHeading>
        Parabéns sua fatia está quase garantida aguarde nosso contato!
      </FormRegisterThanksHeading>
      <br />
    </FormRegisterThanksContainer>
    </Route>
  );
}

export default Thanks;
