import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;

`;
export const ImageAproved = styled.Image`
  width:200px;
  height: 200px;
`;
export const Title = styled.Text`
  font-size:25px ;
  text-align: center;
  font-family:Montserrat_800ExtraBold;

`;
export const YourNote = styled.View``;

export const CardNote = styled.View`
text-align: center;
align-content: center;
justify-content: center;
align-items: center;
  background-color: ${colors.titleColor};
  width: 170px;
  height: 50px;
  border-radius: 8px;
  margin-top: 10px;
`;
export const DescriptionsAproved = styled.View`
  width: 90%;
  `;
export const TextPoints = styled.Text`
  color:white;
  font-size: 20px;
  font-family:Montserrat_800ExtraBold;
`;
export const TextDescription = styled.Text`
font-family: Montserrat_500Medium;

`;
