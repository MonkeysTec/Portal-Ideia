import React from 'react';
import Button from '../../components/Button';

import { Container, Title, TextButton, SubTitle, Img } from './styles';
 import laptop from "../../assets/character-using-laptop.png"

const SLideDois = () => {
  return (
    <Container>
      <Img source={laptop}/>
      <Title>
       O Portal IDEA é uma plataforma de
        cursos livres inteiramente online!

      </Title>
      <SubTitle>
      Estude de onde quiser, a hora que
        quiser e o quanto quiser!
      </SubTitle>

      <Button>
        ESTUDAR AGORA
      </Button>


  </Container>
  )

}

export default SLideDois;
