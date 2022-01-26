import styled from 'styled-components/native';
import colors from "../../utils/colors"
export const Container = styled.View`
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
`;



export const Title = styled.Text`
  color: ${colors.titleColor};
  font-weight: 800;
  font-size: 25px;
  text-align: center;
  margin-bottom: 20px;

`;
export const Img = styled.Image`
  width: 150px;
  height: 150px;
`;
