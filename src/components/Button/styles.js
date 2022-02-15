import styled, { css } from 'styled-components/native';
import colors from "../../utils/colors"


export const Container = styled.TouchableOpacity`
  height: 48px;
  border-radius: 50px;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${colors.buttonBgColor};
  margin-top: 25px;

  width: ${(props)=>props.fullsize?'90%':'200px'};

  ${(props) => props.type === 'primary' && css`
    background-color:#5D34A0;
    color:white;

  `}


`;
export const TextButton = styled.Text`
 ${(props) => props.type === 'primary' && css`
    color:white;

`}

  font-weight: 800;
  text-transform: uppercase;
  font-size: 15px;

`;
