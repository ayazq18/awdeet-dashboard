import { ProductProvider } from './ContextApi/ProductContext';
import Home from './Components/Home/Home';


function App() {
  return (
    <ProductProvider>
      <Home />
    </ProductProvider>
  );
}

export default App;
