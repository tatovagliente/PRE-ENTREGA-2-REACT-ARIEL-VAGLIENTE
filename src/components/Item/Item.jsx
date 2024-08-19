import React from 'react'
import "./Item.css"

const Item = ({item}) => {
  return (
    <div key={item.id} className="card">
        <img src={item.imagen} alt={item.nombre}/>
    </div>
  )
}

export default Item