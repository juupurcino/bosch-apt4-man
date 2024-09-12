import style from './App.module.css'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

function App() {

    return (
      <>
      <div className={style.wrapBtns}>
        <button><a href='/Consumo'>Consumo</a></button>
        <button><a href='/Produtos'>Produtos</a></button>
        <button><a href='/Map'>Map</a></button>
        <button><a href='/Grafico'>Gráfico</a></button>
        
      </div>
      <div  className={style.wrapPage}>
        <h1>Exercícios de manutenção</h1>
      </div>
      </>
    )
}


export default App
