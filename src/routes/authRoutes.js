import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import Login from '../pages/Login';
const Auth = createStackNavigator();

const AuthRoutes = ()=>{
    return(
        <Auth.Navigator  screenOptions={{
        headerStyle: { height: 100, backgroundColor: '#5D34A0', },
        headerTitleStyle: {
        fontWeight: "bold",
        color: "#FFF",
      },
      }}>
            <Auth.Screen name="Login" component={Login} />


        </Auth.Navigator>
    );
}

export default AuthRoutes;
