import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import splash from '../view/splash';
import login from '../view/login';
import home from '../view/home';
import profile from '../view/profile';
import buyhome from '../view/buyhome';

const Stack = createStackNavigator();

function stackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={splash}  headerMode="false"/>
      <Stack.Screen name="Login" component={login} /> 
      <Stack.Screen name="Home" component={home} /> 
      <Stack.Screen name="Profile" component={profile} /> 
      <Stack.Screen name="Seller" component={buyhome} /> 
    </Stack.Navigator>
  );
}

export default stackNavigation;
