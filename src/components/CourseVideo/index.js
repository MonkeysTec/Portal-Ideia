import React from 'react';
import { View } from 'react-native';

import { Container,IconVideoView,Icon,TextVideo } from './styles';
import video from '../../assets/video.png'
const CourseVideo = () => {
  return (
    <IconVideoView>
          <Icon source={video}/>
          <TextVideo>
            Curso com Vídeo
          </TextVideo>
        </IconVideoView>
  );
}

export default CourseVideo;
