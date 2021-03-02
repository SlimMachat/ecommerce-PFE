import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ product }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const handleOnClick = index => setImgIndex(index);

  return (
    <ImagesStyled>
      <div className='thumbnail'>
        {product.images.map((img, index) => (
          <img key={index} src={img} alt={product.name} onClick={() => handleOnClick(index)} />
        ))}
      </div>
      <div className='image-cover'>
        <img src={product.images[imgIndex]} alt={product.name} />
      </div>
    </ImagesStyled>
  )
}

const ImagesStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  .thumbnail{
    width: 80%;
    img{
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
      :foucs {
        outline: none!important;
      }
    }

  }
  
  .image-cover {
    position:relative;
  }

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    .thumbnail{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4,1fr);
      grid-gap: 0.5rem;
      grid-row: 2;
    }
    .image-cover{
      grid-row: 1
    }
  }
`

export default ProductImages