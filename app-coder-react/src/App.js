import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CartContextProvide from './componentes/CartContext';
import ItemListConteiner2 from './componentes/ItemListConteiner2';
import NavBar from './componentes/NavBar';
import ItemDetailConteiner from './componentes/detailConteiner/ItemDetailConteiner';
import CartConteiner from './componentes/CartConteiner';
import Footer from './componentes/Footer'




function App() {
  return (
<div className ="AppC">
 <BrowserRouter>
<CartContextProvide>
  <div>
<NavBar />
<Routes>
  <Route index path='/' element={<ItemListConteiner2 />}/>
  <Route index path='/categoria/:categoriaId' element={<ItemListConteiner2 />}/>
  <Route path='/detalles/:productoId' element={<ItemDetailConteiner/>}/>
  <Route path='/' element={<navigate to='/ItemListConteiner2'/>}/>
  <Route path ='/cart' element={<CartConteiner/>}/>
</Routes>
<Footer/>
</div>
</CartContextProvide>
</BrowserRouter>
</div>
  );
}


export default App;


