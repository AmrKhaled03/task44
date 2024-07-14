
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Error from './components/Error';
import Products from './components/Products';
import Cart from './components/Cart';
import { ContextProvider } from './components/ShoppingContext';

function App() {
  return (
  <>
  <ContextProvider>
   <Navbar/>
<Routes>
  <Route index exact  path='/' element={<Home/>}/>
  <Route path='*' element={<Error/>}/>
  <Route path='/products' element={<Products/>}/>
<Route path='/cart' element={<Cart/>}/>
</Routes> 
  </ContextProvider>

  </>

  );
}

export default App;
