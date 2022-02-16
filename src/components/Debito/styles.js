import styled from 'styled-components/native';
import colors from '../../utils/colors';




export const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
`;


export const Title = styled.Text`
  color:${colors.titleColor};
  font-weight: 800;
  font-size: 25px;
  padding-bottom:30px;
`;
export const PasswordRemeber = styled.TouchableOpacity`
margin-top: 20px;
  color: ${colors.secundaryTitle};
  font-weight: 800;
`;
export const NewAccount = styled.Text`

   color: ${colors.secundaryTitle};

  font-weight: 800;
  margin-top: 10px;
  `;
export const ErrorMessage = styled.Text`
  color: red;
  font-size:15px;
`;
export const ViewDate = styled.View`
justify-content: center;
width: 100%;
align-items: center;
align-content: center;
margin-top: 20px;

`
export const Label = styled.Text`
 color: ${colors.titleColor} ;
 font-family:  Montserrat_600SemiBold;


`;
export const DataAndroid = styled.TouchableOpacity`
justify-content: center;
  background-color: transparent;
  width: 80%;

  border:2px solid ${colors.buttonBgColor} ;
  padding-left: 15px;
  border-radius: 8px;
  height: 48px;


`;
export const SelectIos = styled.View`
flex:1;


`;
