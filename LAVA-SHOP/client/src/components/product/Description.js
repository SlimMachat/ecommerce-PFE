import React from 'react'
import styled from 'styled-components'

const Description = ({ product }) => {
  return (
    <ProductDesc>
      <div className='container'>
        <div className='description'>
          <div className='text'>
            <h2>Product Description</h2>
            <p>{product.description}</p>
          </div>
          <div className='img'>
            <img src={product.images[0]} alt={product.name} />
            <img src={product.images[1]} alt={product.name} />
          </div>
        </div>
      </div>
    </ProductDesc>
  )
}

const ProductDesc = styled.section`
  background-color: var(--light-bg);
  .container {
    padding: 2rem;
  }
  .description{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2.5rem;
    margin: 2.5rem 0;
    h2{
      margin-bottom: 1rem;
    }
    .img {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
  }
  .shipping{
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 2rem;
    margin: 2.5rem 0;
  }
`

export default Description
