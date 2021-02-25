import React from 'react'
import styled from 'styled-components';

export const InStock = ({ stock }) => {
  const unique = [...new Set(stock.map(item => item.size))];
  
  return unique.map((size, index) => {
    return (
      <UniqueSizeStyled
        key={size}
      >
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
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 0.8rem;
  }
`