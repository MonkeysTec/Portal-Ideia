import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.View`
justify-content: center;
align-items: center;
`;
export const Card = styled.View`
  border: 2px solid ${colors.greyMax};
  margin-top: 20px;
 min-height: 450px;
 width: 90%;
 height: auto;
 border-radius: 8px;

`
export const Img = styled.Image`
  width: 90%;
  height: 180px;
  margin-left: 5%;
  margin-top: 5%;
`;

export const Title = styled.Text`
  margin-left: 5%;

  font-family: Montserrat_800ExtraBold;
  font-size: 18px;

`;
export const Tag = styled.Text`
  margin-left: 5%;
  background-color: ${colors.greyMax};
  width: 90%;
  padding-left: 20px;
  margin-top: 10px;

`;
