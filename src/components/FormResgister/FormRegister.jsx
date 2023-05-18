import React, { useState } from 'react';
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

// import axios from 'axios';

function FormRegister() {
  const outerTheme = useTheme();

  const handleClose = () => {
    window.location.reload();
  };

  //Declaração de estado para os inputs

  const [data, setData] = useState({
    nomePizzaria: '',
    nomeResponsavel: '',
    telefone: '',
    email: '',
    endereco: '',
    raioEntrega: '',
    consumoMes: '',
    consumoFimDeSemana: '',
    valorMedio: '',
    canaisVenda: '',
  });

  // //Declarar a variavel para receber a mensagem
  // const [msg, setMsg] = useState('');

  //Receber os dados dos inputs

  const valorInput = e => setData({ ...data, [e.target.name]: e.target.value });

  //Enviar os dados para o backend

  const sendMsg = async e => {
    // e.preventDefault();
    //  console.log(`Nome da Pizzaria: ${data.nomePizzaria}`);
    //  console.log(`Nome do Responsavel: ${data.nomeResponsavel}`);
    //  console.log(`Telefone: ${data.telefone}`);
    //  console.log(`Email: ${data.email}`);
    //  console.log(`Endereco: ${data.endereco}`);
    //  console.log(`Raio de entrega: ${data.raioEntrega}`);
    //  console.log(`Consumo mes: ${data.consumoMes}`);
    //  console.log(`Consumo fim de semana: ${data.consumoFimDeSemana}`);
    //  console.log(`Valor medio: ${data.valorMedio}`);
    //  console.log(`Canais venda: ${data.canaisVenda}`);
    //   const headers = {
    //     'Content-Type': 'application/json',
    //   };
    //   await axios.post('http://localhost:8080/cadastro', data, headers)
    //     .then(response => {
    //       setMsg(response.data.cadastro);
    //       setData({
    //         nomePizzaria: '',
    //         nomeResponsavel: '',
    //         telefone: '',
    //         email: '',
    //         endereco: '',
    //         raioEntrega: '',
    //         consumoMes: '',
    //         consumoFimDeSemana: '',
    //         valorMedio: '',
    //         canaisVenda: '',
    //       });
    //     })
    //     .catch(error => {
    //       setMsg(error.response.data.cadastro);
    //     });
  };

  return (
    <FormRegisterContainer>
      <Icon onClick={handleClose}>
        <CloseIcon />
      </Icon>
      <FormRegisterHeading>
        Falta pouco para garantir sua fatia de economia!
      </FormRegisterHeading>

      {/* mensagem de sucesso ou erro 
      {msg ? <p>{msg}</p> : ''} */}

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
        <form
          action="https://formsubmit.co/criativbox@gmail.com "
          method="POST"
          onChange={sendMsg}
        >
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              name="nomePizzaria"
              label="Nome da Pizzaria"
              type="text"
              onChange={valorInput}
            />
          </ThemeProvider>

          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              label="Nome do responsável"
              type="text"
              name="nomeResponsavel"
              onChange={valorInput}
            />
          </ThemeProvider>

          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              label="Telefone"
              type="tel"
              name="telefone"
              onChange={valorInput}
            />
          </ThemeProvider>

          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              label="Email"
              type="email"
              name="email"
              onChange={valorInput}
            />
          </ThemeProvider>

          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              label="Endereço"
              type="text"
              name="endereco"
              onChange={valorInput}
            />
          </ThemeProvider>

          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              label="Raio de entrega"
              type="number"
              name="raioEntrega"
              onChange={valorInput}
            />
          </ThemeProvider>

          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              label="Consumo mês"
              type="number"
              name="consumoMes"
              onChange={valorInput}
            />
          </ThemeProvider>

          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              label="Consumo fim de semana"
              type="number"
              name="consumoFimDeSemana"
              onChange={valorInput}
            />
          </ThemeProvider>

          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              label="Valor médio"
              type="number"
              name="valorMedio"
              onChange={valorInput}
            />
          </ThemeProvider>

          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              label="Canais de venda"
              type="text"
              name="canaisVenda"
              onChange={valorInput}
            />
          </ThemeProvider>

          <input
            type="hidden"
            name="_next"
            value="https://pizzaria.criativbox.com.br/"
          ></input>

          <input type="hidden" name="_captcha" value="false"></input>

          <br />
          <FormRegisterButton type="submit">Enviar</FormRegisterButton>
        </form>
      </Box>
    </FormRegisterContainer>
  );
}

export default FormRegister;
