import Draggable from 'react-draggable';
import styleCard from './Card.module.css'

const Modal = (props) => {
    return(
        <>
        <Draggable>
        <div className={styleCard.cardModal}>
          <h1>{props.data.name}</h1>
          <img src={props.data.image} alt={props.data.name} width={150} height={"auto"}/>
          <h2>{props.data.species}</h2>
          <p>{props.data.type}</p>
          <p>{props.data.gender}</p>
          <p className={props.data.status ? styleCard.true : styleCard.false }>O</p>
      </div>
        </Draggable>
        </>
    )
}
export default Modal;