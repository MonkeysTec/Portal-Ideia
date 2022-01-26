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
`;
export const PasswordRemeber = styled.Text`
margin-top: 20px;
  color: ${colors.secundaryTitle};
  font-weight: 800;
`;
export const NewAccount = styled.Text`

   color: ${colors.secundaryTitle};

  font-weight: 800;
  margin-top: 10px;
  `;
