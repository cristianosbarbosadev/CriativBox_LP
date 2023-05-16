import React from 'react';
import {
  FormRegisterContainer,
  FormRegisterButton,
  FormRegisterHeading,
  Icon,
  CloseIcon,
} from './FormRegisterElements';
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { customTheme } from './FormRegisterElements';
import TextField from '@mui/material/TextField';




function FormRegister() {
  const outerTheme = useTheme();

  
  const handleClose = () => {
    window.location.reload();
  };

  return (
    <FormRegisterContainer >
      <Icon onClick={handleClose}>
        <CloseIcon />
      </Icon>
      <FormRegisterHeading>
        Falta pouco para garantir sua fatia de economia!
      </FormRegisterHeading>

      {/* Inputs */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center',
        }}
      >
        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField label="Nome da Pizzaria" type="Phone" />
        </ThemeProvider>

        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField label="Nome do responsável" type="Phone" />
        </ThemeProvider>

        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField label="Telefone" type="Phone" />
        </ThemeProvider>

        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField label="Email" />
        </ThemeProvider>

        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField label="Endereço" />
        </ThemeProvider>

        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField label="Raio de entrega" />
        </ThemeProvider>

        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField label="Consumo mês" />
        </ThemeProvider>

        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField label="Consumo fim de semana" />
        </ThemeProvider>

        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField label="Valor médio" />
        </ThemeProvider>

        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField label="Canais de venda" />
        </ThemeProvider>
      </Box>

      <FormRegisterButton>Enviar</FormRegisterButton>
    </FormRegisterContainer>
  );
}

export default FormRegister;
