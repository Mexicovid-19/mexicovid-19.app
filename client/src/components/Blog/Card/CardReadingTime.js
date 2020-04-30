import React from 'react'
import styled from 'styled-components'

const ReadingTime = styled.p`
  color: #b5b5b5;
  font-size: 15px;
  position: absolute;
  top: -2px;
  right: 8px;
`

export const CardReadingTime = ({ time }) => (
  <ReadingTime>Aprox. {Math.round(time)} min. de lectura</ReadingTime>
)