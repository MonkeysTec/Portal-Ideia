import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.View`
flex:1;
align-items: center;
`;

export const Text1 = styled.Text`
  font-size: 30px;
  font-weight: 700;
  font-family:Montserrat_600SemiBold;
  width: 90%;
  margin-top: 20px;

`;

export const TextDescripition = styled.Text`
  width: 90%;
  font-family:Montserrat_600SemiBold;


`;
export const TextPicker = styled.Text`
font-size:20;
color: ${colors.fontColor};
margin-top: 20px;

`
export const ViewPicker = styled.View`
border: 2px solid black;

`
