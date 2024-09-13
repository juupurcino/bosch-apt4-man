import { api } from "./api/rmApi"
import { CardAPI } from './components/CardAPI'
import style from './App.module.css'
import { useState, useEffect } from 'react'
import App from './App.jsx'
import Modal from './components/modal'

export default function Consumo(){

  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")
  const [modal, setModal] = useState();

  useEffect(() => {
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
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
  }, [page, name])

    
  return(

        <>
        {modal !== undefined && <Modal data={data[modal]} close = {() => setModal()}/>}
        <App/>
            <h2>Rick and Morty API</h2>
            <div>
                <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
            </div>
            <div>
                <input type="text" placeholder="Digite um nome" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className={style.config}>
            {data.map((item, index) => { 
            return(
                <div key={item.id} className={style.card} onClick={() => setModal(index)}>
                <CardAPI  name={item.name} desc={item.species} value={item.gender} image={item.image} species={item.species} type={item.type} gender={item.gender}/>
                {/* <button onClick={() => {}}>Info</button> */}
                </div>
                )
            })}
            </div>
        </>
    )

} 
