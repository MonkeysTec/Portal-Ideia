import React,{useState} from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import Avaliation from './avaliation';

import { Container,Title, Description,Explication} from './styles';

const Prova = () => {
  const [avaliation, setAvaliation] = useState(false);


  if(avaliation===true)
  {
    return <Avaliation/>
}
  return (
    <Container>
      <Title>
        Orientações para uma boa
avaliação
      </Title>
      <Description>
        Sua Avaliação final possui 05 questões de
múltipla escolha que abordam o assunto
estudado no Curso, cada resposta certa vale
20 pontos.
      </Description>
      <Explication>
        •Somente é possível marcar 01 resposta em cada{`\n`}
pergunta.{`\n`}
• A nota mínima para ser aprovado é de 60 pontos.{`\n`}
• Caso não seja aprovado na primeira tentativa, você
terá mais 3 tentativas.
      </Explication>
      <Button type="primary" onPress={()=>setAvaliation(true)} >
        continuar
      </Button>

    </Container>
  );
}


export default Prova;
