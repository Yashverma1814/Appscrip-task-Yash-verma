import React from 'react'
import '../style/ProductCard.css'

const ProductCard = (props) => {
    var data = props.product
  return (
    <div>
      <div className="card-container">
      <img 
        src={data.image}
        alt="Product" 
        className="card-image" 
      />
      <div className="card-content">
        <div className="card-title">{data.title}</div>
        <div className="card-subtitle">
          <a href="#">Sign in</a> or Create an account to see pricing
        </div>
      </div>
      <div className="card-heart">♡</div>
    </div>
    </div>
  )
}

export default ProductCard
