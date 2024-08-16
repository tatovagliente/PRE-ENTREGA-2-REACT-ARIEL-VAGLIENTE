import React from 'react'
import "./Item.css"

const Item = ({item}) => {
  return (
    <div key={item.id} className="card">
        <img src={item.imagen} alt={item.nombre}/>
        <h2>{item.nombre}</h2>
        <p>{item.detalle}</p>
        <p>PRECIO:$ {item.precio}</p>
        <p>STOCK: {item.stock}</p>
    </div>
  )
}

export default Item