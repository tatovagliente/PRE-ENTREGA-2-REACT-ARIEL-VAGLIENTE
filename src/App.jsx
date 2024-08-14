import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {


  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="BIENVENIDO A CERCENASCO TIENDA DE MODA MASCULINA"/>
      <ItemCount/>
      <Footer/>
    </>
  );
}

export default App;
