import React from 'react'
import styled from 'styled-components'

const StyledCategory = styled.div`
  display: inline-block;
  background: #009bbb;
  border-radius: 3px;
  padding: 3px 15px;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 1px;
  line-height: 28px;
  margin-right: 10px;
  font-family:'Raleway';
`

export const CardCategory = ({ value }) => (
  <StyledCategory
    key={value.id}
    style={{ backgroundColor: `#${value.color}` }}>
    {value.name}
  </StyledCategory>
)