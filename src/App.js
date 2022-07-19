import './App.css';
import Button from './components/Button';

function App() {
  const onClickHandler = () => {
    alert('chau');
  };

  return (
    <div className="App">
      <Button text={"Hacé Click"} onClick={()=> alert('hola')} />
      <Button text={"Otro botón para hacer Click"} onClick={onClickHandler} />
    </div>
  );
}

export default App;
