import styleCard from './Card.module.css'

/* eslint-disable react/prop-types */
export const Card = ({name, image, desc, value, status}) => {
  return(
      <div className={styleCard.card}>
          <h1>{name}</h1>
          <img src={image} alt={name} width={150} height={"auto"}/>
          <h2>{desc}</h2>
          <p>{value}</p>
          <p className={status ? styleCard.true : styleCard.false }>O</p>
      </div>
  )
}