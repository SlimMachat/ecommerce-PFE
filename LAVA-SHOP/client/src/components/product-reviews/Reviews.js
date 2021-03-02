import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getReviews } from '../../redux/action/reviewAction'
import Spinner from '../layout/Spinner'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'
import ReviewHeader from './ReviewHeader'
import styled from 'styled-components'

const Reviews = ({ product, reviews: { loading, reviews }, auth }) => {
  const [openReview, setOpenReview] = useState(false);

  // TOGGLE REVIEW FORM BOX
  const toggleReviewForm = () => setOpenReview(!openReview);

  return (
    loading && reviews === null
      ? <Spinner />
      : <>
        <ReviewsStyled className='container'>
          <h2>Reviews</h2>
          <ReviewHeader
            product={product}
            toggleReviewForm={toggleReviewForm}
          />
          <ReviewForm openReview={openReview} product={product} setOpenReview={setOpenReview} />
          <ReviewList reviews={reviews} product={product} auth={auth}/>
        </ReviewsStyled>
      </>
  )
}

const ReviewsStyled = styled.section`
  margin: 2rem auto 7rem;
  padding: 0 1rem;
  @media (min-width: 768px) {
    padding: 0 2rem;
    margin: 6rem auto 8rem;
  }
  .stars-container {
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin-bottom: 2rem;
  }
  .star-container {
    margin-top: 2px;
  }
`

const mapStateToProps = state => ({
  reviews: state.review,
  auth: state.auth
});

export default connect(mapStateToProps, { getReviews })(Reviews)