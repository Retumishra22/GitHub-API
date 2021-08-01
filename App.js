import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import Home from './components/Home.js';
import Profile from './components/Profile.js';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName = 'Home'
        >
        <Stack.Screen
          name = 'Home'
          component = {Home}
          options = {{
          headerStyle : {
            backgroundColor : '#0d1117',
            height: 90,
          },
          title: 'Github API',
          headerTitleStyle: {
            textAlign: 'center',
            fontSize: 22,
            color: 'white',
          }
          }}
        />
        <Stack.Screen
          name = 'Profile'
          component = {Profile}
          options = {{
          headerStyle : {
            backgroundColor : '#238636',
            height: 90,
          },
          
          headerTitleStyle: {
            textAlign: 'center',
            fontSize: 22,
            color: 'white'
          }
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App;

const styles = StyleSheet.create({
  custom: {
    color:'white'
  }
})