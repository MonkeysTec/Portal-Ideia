import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.View`
  flex:1 ;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
 `;
export const Thumbnail = styled.Image`
  width: 90%;
  border-radius: 8px;
  height: 150px;
  margin-top:20px
  `;
export const TitleCourse = styled.Text`
  font-size:25px ;
  font-weight: 600;
  font-family:'Montserrat_600SemiBold';

`;

export const Description = styled.Text`
  width: 90%;
  font-family:Montserrat_500Medium;

`;

export const Content = styled.Text`
  width: 90%;
  font-family:Montserrat_500Medium;


`;
export const Certificate = styled.Text`
  width: 90%;
  font-family:Montserrat_500Medium;


`;
export const Divider = styled.Text`
  width: 90%;
  height: 3px;
  background-color: #DEDDEE;
  margin:10px ;


`;


export const TitlesTopics = styled.Text`
  font-size: 20px;
  font-family:Montserrat_500Medium;

`
export const Icon = styled.Image`
  width: 20px;
  height: 20px;
  font-family:Montserrat_500Medium;


`;
export const IconVideoView = styled.View`
  flex-direction: row;
  background-color: ${colors.greyMax};
  padding: 5px;
  width: 50%;
  border-radius: 8px;
  margin-top:10px;
`;

