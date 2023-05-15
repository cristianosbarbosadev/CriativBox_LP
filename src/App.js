import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import { GlobalStyle } from './globalStyles';
import { productData } from './components/Products/data';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Presentation from './components/Presentation/Presentation';
import { presentationData } from './components/Presentation/data';

function App() {
	return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Conheça nossos modelos" data={productData} />
      <Presentation heading="Conheça as vantagens do parceiro" data={presentationData}/>
      <Feature />
      <Footer />
    </Router>
  );
}

export default App;
