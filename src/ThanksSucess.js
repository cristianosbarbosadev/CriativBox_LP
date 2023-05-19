import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer/Footer';
import Thanks from './components/FormResgister/Thanks';


function ThanksSucess() {
  return (
    <Router>
      <GlobalStyle />
      <Thanks />
      <Footer />
    </Router>
  );
}

export default ThanksSucess;
