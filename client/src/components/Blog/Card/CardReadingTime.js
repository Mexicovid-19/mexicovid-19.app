import React from 'react'
import styled from 'styled-components'

const ReadingTime = styled.p`
  color: #1B1C1C;
  font-size: 15px;
  position: absolute;
  top: 10px;
  right: 8px;
`

export const CardReadingTime = ({ time }) => (
  <ReadingTime>Aprox. {Math.round(time)} min. de lectura</ReadingTime>
)