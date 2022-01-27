import React from 'react';
import { View } from 'react-native';

import { Container, Icon, HoursCourse } from './styles';
 import clock from  '../../assets/clock.png'

const Hours = ({hours}) => {
  return (
    <View style={{flexDirection:'row'}}>
     <Icon source={clock}/>
        <HoursCourse>
              {hours}
      </HoursCourse>
     </View>
  );
}

export default Hours;
