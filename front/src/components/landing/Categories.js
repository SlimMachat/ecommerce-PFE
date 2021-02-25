import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Categories = () => {
  return (
    <CategoriesStyled>
      <div  className='intro' >
        <h1 > enjoy </h1>
        <p style={{color: "black"}}>SNEAKERS EVERY WHERE</p>
      </div>
      <div className='categories container'>
        <Link to='/shop?category=Nike' className='img-container'>
          <img  style={{height:230 , borderRadius:15}} src= 'https://zeshoes.com/img/m/16.jpg'  />
          <span><h2><strong>Nike</strong></h2></span>
        </Link>
        <Link to='/shop?category=Adidas' className='img-container'>
          <img style={{height:200, borderRadius:15}} src='https://logos-marques.com/wp-content/uploads/2020/04/Adidas-Logo-1971.jpg'  />
          <span><h2><strong>Adidas</strong></h2></span>
        </Link>
        <Link to='/shop?category=Reebok' className='img-container'>
          <img style={{height:250, borderRadius:15}} src='https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/321451_v2.jpg' />
          <span><h2><strong>Reebok</strong></h2></span>
        </Link>
        <Link to='/shop?category=Lacoste' className='img-container'>
          <img style={{height:230, borderRadius:15}} src='https://i.pinimg.com/originals/4e/1e/d2/4e1ed2b0da31835c14a69652fd1b4e23.png' />
          <span><h2><strong>Lacoste</strong></h2></span>
        </Link>
      </div>
    </CategoriesStyled>

  )
}



const CategoriesStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5rem 0;
  .intro {
    text-align: center;
    margin: 1rem 0 3rem;
    h1 {
      text-transform: uppercase;
    }
    p{
      color: silver;
    }
  }
  .container {
      padding:0;
    }
  .categories {
    display: grid;
    grid-gap: 1.5rem;
   
    .img-container{
      position: relative;
      overflow: hidden;
      cursor: pointer;
      width:309px;
      height:402px;
    }
    .img-container img{
      transition: all 0.4s ease-in;
    }
    .img-container:hover img{
      transform: scale(1.1);
    }
    .img-container:nth-child(1){
      grid-area: women;
    }
    .img-container:nth-child(2){
      grid-area: men;
    }
    .img-container:nth-child(3){
      grid-area: bags;
    }
    .img-container:nth-child(4){
      grid-area: shoes;
    }
    grid-template-columns: none;
    grid-template-areas:
      'women women bags men men'
      'women women bags men men'
      'women women shoes men men'
      'women women shoes men men';
    span{
      position: absolute;
      bottom: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      background: var(--light-clr);
      padding: 0.5rem 1rem;
    }
  }
  @media(max-width: 996px){
    margin: 0 auto 5rem;
    .intro {
      margin: 3rem 0;
      h1{
        font-size: 1.3rem;
      }
    }
    .container {
      padding: 0;
    }  
  }
  @media (max-width: 768px){
    .categories{
      grid-template-areas:
        'women bags'
        'shoes men';
      grid-gap: 0.6rem;
      .img-container {
        height: 100%;
        img{
          height: 100%;
        }
      }
    }
  }
`

export default Categories
