import {
  FormRegisterContainer,
  FormRegisterHeading,
  Icon,
  CloseIcon,
} from './FormRegisterElements';




function Thanks() {

  

  const handleClose = () => {
    window.location.reload();
  };

  return (
    <FormRegisterContainer>
      <Icon onClick={handleClose}>
        <CloseIcon />
      </Icon>
      <FormRegisterHeading>
        Parabéns sua fatia está quase garantida aguarde nosso contato!
      </FormRegisterHeading>
      <br />
    </FormRegisterContainer>
  );
}

export default Thanks;