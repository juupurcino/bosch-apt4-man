import style from './App.module.css'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

function App() {

  return (
    <>
    <div className={style.wrapBtns}>
      <a href={`/Consumo`}>API</a>
      <a href={`/Produtos`}>API</a>
      <a href={`/Map`}>API</a>
      
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
    </div>
    </>
  )
}

export default App
