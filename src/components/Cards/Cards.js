import React from 'react'
import './cards.css'

const Cards = (data) => {
  return (
    <div className="card margin" style={{width: '18rem'}}>
      <img src={data.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{data.name}</p>
      </div>
    </div>
  )
}

export default Cards