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
  font-family:Montserrat_600SemiBold;

  width: ${(props)=>props.fullsize?'90%':'200px'};

  ${(props) => props.type === 'primary' && css`
    background-color:#5D34A0;
    color:white;

  `}
  ${(props) => props.type === 'transparent' && css`
    background-color:transparent;
    color:#5D34A0;
    border: 3px solid ${colors.fontColor};


  `}


`;
export const TextButton = styled.Text`
 ${(props) => props.type === 'primary' && css`
    color:white;

`}
${(props) => props.type === 'transparent' && css`
    color:${colors.fontColor};

`}

  font-weight: 800;
  text-transform: uppercase;
  font-size: 15px;

`;
