import React from 'react'

const ProductCard = ({title, price, desc, image, category}) => {
  return (
    <div style={{ height: "400px", width: "300px", border: "1px solid black",justifyContent:"center",gap:"15px"  }}>
      <img height={"200px"} width={"300px"} src={image} alt={title} />
      <h2>{title}</h2>
     <h3><p>{desc}</p></h3>
      <p>{category}</p>
      <h1><p>{price}</p></h1>
    </div>
  )
}

export default ProductCard