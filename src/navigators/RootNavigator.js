/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import FolderScreen from '../components/FolderScreen';
import FileScreen from '../components/FileScreen';

const Stack = createStackNavigator();

const RootNavigator = ({route}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, gestureDirection: 'horizontal', ...TransitionPresets.SlideFromRightIOS }} initialRouteName={'FolderScreen'}>
        <Stack.Screen name="FolderScreen" component={FolderScreen} />
        <Stack.Screen name="FileScreen" component={FileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
