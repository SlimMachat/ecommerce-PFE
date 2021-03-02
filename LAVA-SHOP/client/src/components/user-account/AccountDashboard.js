import React from 'react'
import styled from 'styled-components'
import Banner from '../layout/Banner'
import AccountLayout from './AccountLayout'
import { accountDashboardList } from '../../constants/account-nav'
import { connect } from 'react-redux'
import { logout } from '../../redux/action/authAction'
import Spinner from '../layout/Spinner'

const AccountDashboard = ({ auth: { user, loading }, logout }) => {
  return (
    <>
      {loading
        ? <Spinner />
        : (<>
          <Banner dark>
            <h1>Just Enjoy It</h1>
          </Banner>
          <AccountLayout className='container'>
            <Main>
              <Greetings>
                <p>
                  Hello <strong>{user.name}</strong> (not <strong>{user.name}</strong>? <span onClick={() => logout()}>Logout</span>)
                    </p>
              </Greetings>
              <DashboardMain>
                {accountDashboardList()}
              </DashboardMain>
            </Main>
          </AccountLayout>
        </>)
      }
    </>
  )
}

const Greetings = styled.div`
  padding: 1rem;
  background-color: rgba(136,136,136,.06);
  span {
    cursor: pointer;
    text-decoration: underline;
  }
`

const Main = styled.div`
  padding: 0 1rem;
  @media (min-width: 576px) {
    width: 70%;
  }
`

const DashboardMain = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  a{
    border: 1px solid var(--faint-grey);
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    transition: all 0.2s;
    .icon {
      font-size: 3rem;
      color: rgba(129, 129, 129, 0.2);
      transition: all 0.2s;
      margin-bottom: 0.5rem;
    }
  }
  a:hover .icon{
    color: var(--primary-clr);
  }
  a:hover {
    background-color: var(--fainter-grey);
  }
`

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(AccountDashboard)