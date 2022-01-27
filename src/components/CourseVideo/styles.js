import styled from 'styled-components/native';
import colors from '../../utils/colors';
export const Container = styled.View`

`;
export const IconVideoView = styled.View`
  flex-direction: row;
  background-color: ${colors.greyMax};
  padding: 5px;
  width: 50%;
  border-radius: 8px;
  margin-top:10px;
`;
export const Icon = styled.Image`
  width: 20px;
  height: 20px;
  font-family:Montserrat_500Medium;


`;
export const TextVideo = styled.Text`
  color: ${colors.fontColor};
  font-weight: 700;
  margin-left: 5px;
  font-family:Montserrat_500Medium;

`;
