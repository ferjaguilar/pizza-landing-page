import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import { ProductData } from './components/Products/data';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={ProductData} />
    </Router>
  );
}

export default App;
