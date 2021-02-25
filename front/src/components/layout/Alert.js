import React from 'react'
import { connect } from 'react-redux'
import { IoIosWarning } from 'react-icons/io'
import styled from 'styled-components'

const Alert = ({ alerts }) => {
  if (alerts !== null && alerts.length > 0) {
    return (
      <div className='container'>
        <AlertStyled key={alerts[0].id}>
          <strong><IoIosWarning className='icon' /></strong>{alerts[0].msg}
        </AlertStyled>
      </div>
    )
  }
  return null;
}

const mapStateToProps = state => ({
  alerts: state.alert
})

const AlertStyled = styled.div`
  padding: 1rem 1.5rem;
  border: 2px solid var(--light-gold);
  color: var(--dark-gold);
  margin: 3rem 3rem 0;

  strong {
    .icon {
      color: var(--dark-gold);
      vertical-align: middle;
      font-size: 1.1rem;
      margin-right: 0.5rem;
      margin-bottom: 3px;
    }
  }

  @media (max-width: 1170px) {
    margin: 3rem 2rem 0;
  }
  @media (max-width: 576px) {
    margin: 1rem 0 0;
  }
`

export default connect(mapStateToProps)(Alert)