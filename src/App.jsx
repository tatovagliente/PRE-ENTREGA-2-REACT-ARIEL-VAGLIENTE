import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {


  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="BIENVENIDO A CERCENASCO TIENDA DE MODA MASCULINA"/>
      
      <ItemDetailContainer/>
      <Footer/>
  
    </>
  );
}

export default App;
