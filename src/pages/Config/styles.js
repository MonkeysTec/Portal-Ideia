import styled from 'styled-components/native';
import colors from '../../utils/colors';
export const Container = styled.View`
margin-left: 10%;

`;
export const TitleMenu = styled.Text`
  font-size: 25px;
  font-family: Montserrat_500Medium;
  margin-top: 10px;

`;
export const DivCardsConfig = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 140px;
  `
export const ImgIcon = styled.Image`
  width: 30px;
  height: 30px;
  background-color: ${colors.greyMax};
`
export const ViewIcon = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 20px;

`;
