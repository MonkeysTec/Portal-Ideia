import React from 'react';
import { View,Text } from 'react-native';
import { Container,Ttile,Icon } from './styles';
import pdfIcon from '../../assets/pdf-icon.png'

const CardApostilas = ({title}) => {
  return (
    <Container>
      <Icon source={pdfIcon}/>
      <Ttile>
        {title}
      </Ttile>
  </Container>
  )

}

export default CardApostilas;
