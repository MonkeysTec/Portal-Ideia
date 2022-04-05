import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction:column;
`;
export const Title = styled.Text`
  margin-top: 30px;
  font-size: 20px;
  font-family: Montserrat_800ExtraBold;

`
export const DataAndroid = styled.View`
justify-content: center;
  background-color: transparent;
  width: 80%;

  border:2px solid ${colors.buttonBgColor} ;
  padding-left: 15px;
  border-radius: 8px;
  height: 48px;


`;

export const Obs = styled.Text`
  width: 90%;
  font-family: Montserrat_600SemiBold;
  margin-top: 20px;
`;

export const DivRegras = styled.Text`
  width: 90%;
  padding: 10px;
  font-family: Montserrat_600SemiBold;
  border:2px solid ${colors.buttonBgColor} ;

`;

export const ViewCheck = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;

`;
export const TextQuestion = styled.Text`
  width: 90%;
  font-size: 16px;
  margin-left:5px;

  padding-bottom: 30px;
`;


export const DivTaxa = styled.View`

border: 2px solid ${colors.fontColor};


width: 90%;
border-radius: 8px;
text-align: center;
justify-content: center;
align-items: center;


`;
export const TextValor = styled.Text`
font-size: 20px;
color:${colors.fontColor} ;
font-family: Montserrat_600SemiBold;


`;

export const TextTaxa = styled.Text`
font-size: 20px;
color:${colors.fontColor} ;
font-family: Montserrat_600SemiBold;
`;

