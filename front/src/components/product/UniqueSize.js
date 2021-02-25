import React from 'react'
import styled from 'styled-components';

export const UniqueSize = ({ stock, setSize, setActiveIndex, activeIndex, inStock }) => {
 
  const unique = [...new Set(stock.map(item => item.size))];
  
  return unique.map((size, index) => {
    return (
      <UniqueSizeStyled
        key={size}
        onClick={() => {
          setSize(size);
          setActiveIndex(index);
        }}
        index={index}
        activeIndex={activeIndex}
        inStock={inStock}
      >
        <span>{size.split('')[0]}</span>
      </UniqueSizeStyled>
    )
  })
}

const UniqueSizeStyled = styled.div`
  width: 50px;
  height:  50px;
  cursor: pointer;
  margin-right: 10px;
  border: ${props => props.index === props.activeIndex ? '2px solid var(--primary-clr)' : 'var(--input-border)'};
  background-color: ${props => props.index === props.activeIndex ? 'rgba(69, 160, 161, 0.05)' : 'transparent'};
  position:relative;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 0.8rem;
  }
`