import styled from 'styled-components/native';
import colors from '../../utils/colors'
export const Container = styled.View`
  border: 2px solid grey;
  min-height: 400px;
  height: auto;
  margin-top: 30px;
  border-radius: 8px;
  width: 90%;
  margin-bottom: 20px;

`;


export const NumberQuestion = styled.Text`
  font-size: 30px;
  color: white;
  margin-left: 10px;


`;
export const TitleQuestion = styled.Text`
  font-size:20px;
  color: white;
  margin-left: 10px;
  width: 90%;
  padding: 5px;
`;
export const ViewTitle = styled.View`
  background-color:${colors.fontColor} ;
  flex-direction: row;
  width: 100%;
  height:auto;
  min-height: 60px;
  align-items: center;
  align-content: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;


`;
export const ViewCheck = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;

`;
export const TextQuestion = styled.Text`
  width: 90%;
  font-size: 16px;
  margin-left:5px
`;
