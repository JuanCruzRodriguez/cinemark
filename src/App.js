import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'

const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Hola mundo" />
    <ItemCount />
    </>
  );
}

export default App;
