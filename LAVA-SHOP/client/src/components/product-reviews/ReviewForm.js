import React, { useState } from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'
import Button from '../layout/Button'
import { connect } from 'react-redux'
import { addReview } from '../../redux/action/reviewAction'
import { IoIosWarning } from 'react-icons/io'
import { Link } from 'react-router-dom'

const ReviewForm = ({ openReview, addReview, product, setOpenReview, auth: { isAuthenticated } }) => {
  const [formData, setFormData] = useState({
    rating: 0,
    title: '',
    review: ''
  });
  const [alert, setAlert] = useState(false);
  
  // HANDLE FORM SUBMIT
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (formData.rating === 0 || formData.title === '' || formData.review === '') {
      setAlert(true);

    } else {
      addReview(product.id, formData);
      setFormData({
        rating: 0,
        title: '',
        review: ''
      });
      setAlert(false);
      setOpenReview(false);
    }
  }

  return (
    <ReviewFormStyled open={openReview}>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <div className='form-control'>
          {alert &&
            <div className='warning'>
              <IoIosWarning className='icon' />You must complete all fields</div>
          }
          <label style={{color:"white"}}>Your rating*</label>
          <StarRatings
            name='rating'
            rating={formData.rating}
            starDimension='17px'
            starSpacing='0px'
            starRatedColor='var(--primary-clr)'
            changeRating={e => setFormData({ ...formData, rating: e })}
            starSelectingHoverColor='var(--primary-clr)'
          />
        </div>
        <div className='form-control'>
          <label style={{color:"white"}}>Add a headline*</label>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={e => setFormData({ ...formData, title: e.target.value })}
          />
        </div>
        <div className='form-control'>
          <label style={{color:"white"}}>Write your review *</label>
          <textarea
            name='review'
            value={formData.review}
            cols='30'
            rows='5'
            onChange={e => setFormData({ ...formData, review: e.target.value })}
          />
        </div>
        <div className='btn-container' type='submit'>
          {!isAuthenticated
            ? <Link to='/my-account/login'><Button>Submit</Button></Link>
            : <Button>Submit</Button>
          }
        </div>
      </form>
    </ReviewFormStyled>
  )
}

const ReviewFormStyled = styled.div`
 margin-bottom: 3rem;
  background-color: var(--light-bg);
  padding: 2rem;
  display: ${props => props.open ? 'block' : 'none'};
  .warning {
    color: tomato;
    margin-bottom: 0.5rem;
    .icon {
      vertical-align: middle;
      margin-bottom: 2px;
      margin-right: 0.3rem;
    }
  }
  label {
    margin-right: 0.5rem;
  }
  textarea, input{
    border: var(--input-border);
    width: 100%;
    padding: 0.5rem;
  }
  textarea:focus{
    outline: none;
  }
  .form-control {
    margin-bottom: 0.5rem;
  }
`

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, { addReview })(ReviewForm)
