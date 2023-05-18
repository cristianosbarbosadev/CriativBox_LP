import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';
import Backdrop from '@mui/material/Backdrop';
import FormRegister from '../FormResgister/FormRegister';




function Feature() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
    setOpen(true);
  };
	return (
		<FeatureContainer>
			<h1>Gostou das vantagens</h1>
			<p>Faça seu cadastro hoje mesmo e aumente suas chances de receber nossas caixas gratuitas!.</p>

			<FeatureButton onClick={handleOpen} >Faça seu cadastro</FeatureButton>
			<Backdrop
        sx={{ backgroundColor:"#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
				
        open={open}
        
        to="/FomrRegist"
        invisible={true}
      >
				<FormRegister />
			</Backdrop>
			
		</FeatureContainer>
	);
}

export default Feature;


