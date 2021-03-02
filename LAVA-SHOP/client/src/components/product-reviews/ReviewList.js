import React from 'react'
import styled from 'styled-components'
import { FiUser, FiThumbsUp, FiThumbsDown } from 'react-icons/fi'
import StarRatings from 'react-star-ratings'
import { connect } from 'react-redux'
import { addLike, deleteReview, toggleUnlike } from '../../redux/action/reviewAction'

const ReviewList = ({ reviews, deleteReview, product, addLike, toggleUnlike, auth }) => {
  return (
    <ReviewListStyled>
      {reviews.map(review => {
        return (
          <div key={review.id} className='each-review'>
            <div className='user'>
              <div className='user-name'>
                <FiUser className='icon' />
                <span>Review by {review.user.name}</span>
              </div>
              <div className='review-actions'>
                {/* FIXME: product does not update when review is deleted */}
                <span onClick={() => deleteReview(product.id, review.id)}>Delete</span>
              </div>
            </div>
            <div>
              <StarRatings
                rating={review.rating}
                starDimension='17px'
                starSpacing='0px'
                starRatedColor='var(--primary-clr)'
              />
              <span className='ratings'>{review.rating.toFixed(1)}</span>
            </div>
            <div className='review-text'>
              <h4 className='review-title'>{review.title}</h4>
              <p>{review.review}</p>
            </div>
            <div className='like'>
              <p>Was this review helpful to you?</p>
              <button onClick={() => addLike(product.id, review.id)}>
                <FiThumbsUp className='icon' />
                {review.likes.length}
              </button>
              <button onClick={() => toggleUnlike(product.id, review.id)}><FiThumbsDown className='icon' />{review.unlikes.length}</button>
            </div>
          </div>
        )
      })}
    </ReviewListStyled>
  )
}

const ReviewListStyled = styled.div`
  .each-review{
    border-bottom: var(--input-border);
    padding: 1.5rem 0;
  }
  .user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    .user-name{
      display: flex;
      align-items: center;
    }
    .icon {
      background-color: #444;
      color: white;
      font-size: 2rem;
      padding: 0.5rem;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
    .review-actions {
      span{
        margin-left: 0.5rem;
        cursor: pointer;
      }
      span:hover{
        color: tomato;
      }
    }
  }
  .ratings {
    margin-left: 0.5rem;
  }
  .review-title{
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  .like{
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    p{
      margin-right: 0.7rem;
    }
    button {
      border: var(--input-border);
      padding: 0.5rem 1rem;
      background-color: var(--light-clr);
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: 0.2s all;
      .icon {
        font-size: 1.3rem;
        margin-right: 0.5rem;
      }
    }
    button:hover {
      background-color: var(--faint-grey)
    }
  }
`



export default connect(null, { deleteReview, addLike, toggleUnlike })(ReviewList)