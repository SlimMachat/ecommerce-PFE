import React from 'react'
import { NavLink } from 'react-router-dom'
import { accountNav } from '../../constants/account-nav'
import styled from 'styled-components'

const AccountLayout = ({ children }) => {
  return (
    <LayoutStyled className='container'>
      <Sidebar>
        <SidebarContent>
          <h3>Just Enjoy It</h3>
          <nav>
            <ul>
              {accountNav.map(nav => (
                <li key={nav.text}>
                  <NavLink to={`/my-account${nav.to}`} activeClassName='selected' >
                    {nav.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </SidebarContent>
      </Sidebar>
      {children}
    </LayoutStyled>
  )
}

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem auto 8rem;
  @media (min-width: 576px) {
    flex-direction: row;
  }
`

const Sidebar = styled.aside`
  padding: 0 1rem;
  margin-bottom: 2rem;
  @media (min-width: 576px) {
    width: 30%;
  }
`

const SidebarContent = styled.div`
  h3{
    padding: 1rem;
    background-color: var(--dark-clr);
    color: var(--light-clr);
    text-transform: uppercase;
    text-align: center;
  }
  nav{
    border-bottom: 1px solid rgba(136,136,136,.12);
  }
  a {
    display: block;
    padding: 13px 15px;
    border: 1px solid rgba(136,136,136,.12); 
    border-bottom: 0;
    color: rgba(71,71,71,.8);
    text-transform: uppercase;
  }  
  a:hover {
    background-color:rgba(136,136,136,.04);
  }
  a.selected {
    background-color: rgba(136,136,136,.12);
    border: none;
  }
`

export default AccountLayout