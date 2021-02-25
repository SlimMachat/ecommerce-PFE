import React from 'react'
import styled from 'styled-components';

export const UniqueColor = ({ stock, setColor, activeIndex, setActiveIndex }) => {

  const unique = [...new Set(stock.map(item => item.color))];
  return unique.map((color, index) => (
    <UniqueColorStyled
      key={color}
      background={color}
      onClick={() => {
        setColor(color);
        setActiveIndex(index);
      }}
      index={index}
      activeIndex={activeIndex}
    />
  ));
}

const UniqueColorStyled = styled.div`
  width:50px;
  height: 50px;
  background-color: ${props => props.background ? props.background : 'var(--dark-clr'};
  border: ${props => props.index === props.activeIndex ? '2px solid var(--primary-clr)' : 'var(--input-border)'};
  cursor: pointer;
  position: relative;
  margin-right: 10px;
`