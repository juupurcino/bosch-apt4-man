import styleCard from './Card.module.css'

/* eslint-disable react/prop-types */

export const CardAPI = ({name, status, species, type, gender, image}) => {
  return(
      <div className={styleCard.card}>
          <h1>{name}</h1>
          <img src={image} alt={name} width={150} height={"auto"}/>
          <h2>{species}</h2>
          <p>{type}</p>
          <p>{gender}</p>
          <p className={status ? styleCard.true : styleCard.false }>O</p>
      </div>
  )
}

