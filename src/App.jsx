import { useState, useEffect } from 'react'
import { Card } from './components/Card'
import { CardAPI } from './components/CardAPI'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

function App() {
  const position = [-25.4249069, -49.2749302]
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")


  useEffect(() => {
    api.get(`/character/?page=${page}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        alert("Esta pagina nao contem este personagem")
      }
      console.error(error)
    })
  }, [page])

  useEffect(() => {
    api.get(`/character/?name=${name}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        alert("Esta pagina nao contem este personagem")
      }
      console.error(error)
    })
  }, [name])

  return (
    <>
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
            <div className={style.config}>
            {produtos.map((item) => {
              return(
                <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status}/>
              )
             })}
            </div>
        </>
      }
     {show === "api" &&
        <>
          <h2>Rick and Morty API</h2>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
            </div>
            <div>
               <input type="text" placeholder="Digite um nome" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className={style.config}>
            {data.map((item) => { 
             return(
              <div key={item.id} className={style.card}>
                <CardAPI  name={item.name} desc={item.species} value={item.gender} image={item.image} species={item.species} type={item.type} gender={item.gender}/>
                {/* <button onClick={() => {}}>Info</button> */}
              </div>
              )
           })}
            </div>
       </>
      }
     {show === "map" &&
        <>
      <h2>Mapa</h2>
          <div>
              <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width:'100vw', height:'100vh'}}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                      <a target='_blank' href="https://www.google.com/maps/place/Col%C3%A9gio+SESI+Celso+Charuri/@-25.4249069,-49.2749302,17z/data=!4m10!1m2!2m1!1ssesi+celso+!3m6!1s0x94dce55e3000a6f1:0xc52cd0912ecfc2bd!8m2!3d-25.4248519!4d-49.2724046!15sCgpzZXNpIGNlbHNvIgOIAQFaDCIKc2VzaSBjZWxzb5IBC2hpZ2hfc2Nob29smgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJxZEY5aFgzTlJSUkFC4AEA!16s%2Fg%2F11vd8tbjfz?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D">Senai Google Maps</a>
                  </Popup>
                </Marker>
              </MapContainer>
          </div>
         </>
      }
    </div>
    </>
  )
}

export default App
