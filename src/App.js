import './App.css';
import SecondoComp from './componenti/SecondoComp';
import PrimoCom from './componenti/primoCom';
function App() {
  return (
    <div className="App">
      <h1>Prima app</h1>
      <PrimoCom titolo = "Click"/>
      <SecondoComp src="https://media.istockphoto.com/id/959635616/it/foto/skyline-di-torino-al-tramonto-torino-italia-panorama-paesaggio-urbano-con-la-mole-antonelliana.jpg?s=612x612&w=0&k=20&c=VT6jnYbydXS3vDnUYRtwYt-FqswgTZ93D4OmW1ejJug=" alt="Torino"/>
    </div>
  );
}

export default App;
