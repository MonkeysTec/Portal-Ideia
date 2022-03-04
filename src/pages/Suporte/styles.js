import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.View`
justify-content: center;
align-items: center;
`;


export const Title = styled.Text`
font-size: 25px;
font-family: Montserrat_600SemiBold;


`;


export const Description = styled.Text`
  font-size: 18px;
`;

export const SubDescription = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
`;
export const TextContato = styled.Text`
  font-size: 22px;
  margin-top: 10px;

`;



export const ViewIcon = styled.View`
  flex-direction: row;

`;

export const ImgIcon = styled.Image`
  width: 30px;
  height: 30px;
  background-color: ${colors.greyMax}
`
