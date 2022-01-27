import styled from 'styled-components/native';
import colors from '../../utils/colors';




export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom: 50px;
`;


export const Title = styled.Text`
  color:${colors.maxBlack};
  font-weight: 800;
  font-size: 25px;
  font-family:Montserrat_800ExtraBold;
`;
export const LoginAccount = styled.Text`
  margin-top: 20px;
  color: ${colors.secundaryTitle};
  font-weight: 800;
`;
export const Termos = styled.Text`
  color: ${colors.secundaryTitle};
  font-weight: 800;
  margin-top: 10px;
`;
export const ViewCheck = styled.View`
  flex-direction: row;
  width: 80%;
  margin-top: 10px;
`;
export const TextCheck = styled.Text`
  color: ${colors.secundaryTitle};
  font-weight: 600;
  width: 70%;
`;
export const HalfView = styled.View`
  flex:1;
  flex-direction: row;
  width: 100%;
`;
export const ViewEstado = styled.View`
  width: 24%;
  margin-left:27px;

`;
