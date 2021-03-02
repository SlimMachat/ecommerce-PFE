import React from 'react'
import styled from 'styled-components'
import Button from '../layout/Button'
import StarRatings from 'react-star-ratings'

const ReviewHeader = ({ toggleReviewForm, product }) => {
  return (
    <AverageStars>
      <div>
        <StarRatings
          rating={product.ratingsAverage}
          starDimension='17px'
          starSpacing='0px'
          starRatedColor='var(--primary-clr)'
        />
        <span className='ratings-avg'>{product.ratingsAverage}</span>
        <span>(based on {product.ratingsQuantity} reviews)</span>
      </div>
      <div className='btn-container' onClick={() => toggleReviewForm()}>
        <Button dark>write a review</Button>
      </div>
    </AverageStars>
  )
}

const AverageStars = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  margin-bottom: 4rem;
  .ratings-avg {
    margin: 0 0.5rem;
  }
  @media(max-width:567px){
    flex-direction: column;
    .btn-container{
      width: 100%;
      margin-top: 1rem;
      button {
        width: 100%;
      }
    }
  }
`

export default ReviewHeader