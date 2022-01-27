import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.View`
  width: 100%;
  padding-top:10px;
`;

export const Input = styled.TextInput`
  background-color: transparent;
  width: 80%;

  border:2px solid ${colors.buttonBgColor} ;
  padding-left: 15px;
  border-radius: 8px;
  height: 48px;

`;
export const Label = styled.Text`
 color: ${colors.titleColor} ;
 font-family:  Montserrat_600SemiBold;


`;
export const InputView = styled.View`
  margin-left: 40px;
`;
export const ViewNewInput = styled.View`
  justify-content: center;
  align-content: center;
  align-items: center;

`;
