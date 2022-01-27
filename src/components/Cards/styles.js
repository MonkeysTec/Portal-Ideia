import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.View`
  border:2px solid ${colors.greyMax};
  border-radius: 8px;
  width: 90%;
  justify-content: center;
  justify-content: center;
  text-align: left;
  align-items: center;
  height: 390px;
  margin-bottom: 20px;

`;
export const Thumbnail = styled.Image`
    width: 90%;
    height: 50%;
    border-radius: 8px;

`;
export const Title = styled.Text`
  font-size: 20px;
  font-family:Montserrat_600SemiBold;

`;
export const ViewDescription = styled.View`
  align-items:flex-start;
`;
