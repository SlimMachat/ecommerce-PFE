import React from 'react'
import styled from 'styled-components'
import Categories from './Categories'

const Landing = () => (
  <LandingStyled>
  
    <Categories />
    
  </LandingStyled>
)

const LandingStyled = styled.div`
  padding: 0 5rem;
  .carousel {
    position: relative;
  }
  .slide-div{
    position: relative;
  }
  .nav-btn{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    background: none;
    margin: 0 1rem;
    transition: all 0.2s ease-in-out; 
    background-color: rgba(0,0,0,0.1);
    color: var(--light-clr)
  }
  .nav-btn:hover {
    background-color: rgba(0,0,0,0.3);
  }
  .back-btn {
    left: 0;
  }
  .next-btn {
    right: 0;
  }
  @media(max-width: 1024px){
    padding: 0 1rem;
    .carousel__slide {
      height: 362px;
    }
  }
  @media(max-width: 576px){
    padding: 0 1rem;
    .carousel__slide {
      height: 262px;
    }
    .nav-btn{
      display: none;
    }
  }
  @media(max-width: 400px){
    padding: 0 1rem;
    .carousel__slide {
      height: 192px;
    }
  }
`

export default Landing