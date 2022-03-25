import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer greeting="Hola mundo"></ItemListContainer>
    </>
  );
}

export default App;
