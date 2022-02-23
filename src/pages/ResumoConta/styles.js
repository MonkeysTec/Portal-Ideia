import styled from 'styled-components/native';
import colors from '../../utils/colors';



export const Container = styled.View`
  flex:1;
  align-items: center;
  text-align: center;
`
export const Card = styled.View`
  margin-top:50px;
  border-radius: 12px;
  border :2px solid ${colors.greyMax};
  width: 85%;
  justify-content: center;
  text-align: center;
  align-items: center;

`
export const TitleCard = styled.Text`
  font-size: 30px;
  font-family: Montserrat_600SemiBold;
`
export const NumberCard = styled.Text`
font-size: 70px;
color:${colors.fontColor};
  font-family: Montserrat_600SemiBold;

`
export const TextCard = styled.Text`
  font-size: 25px;
  font-family: Montserrat_600SemiBold;


`
