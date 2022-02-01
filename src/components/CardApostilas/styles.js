import styled from 'styled-components/native';
import colors from '../../utils/colors'
export const Container = styled.View`
  background-color: ${colors.greyMax};
  flex: 1;
  width: 90%;
  min-height: 50px;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;
export const Ttile = styled.Text`
  font-family:Montserrat_600SemiBold;
  margin-left: 20px;
`;
export const Icon = styled.Image`
  width: 30px;
  margin-left: 20px;

  height: 30px;
`;
