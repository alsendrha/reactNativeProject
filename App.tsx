import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Main from './src/screens/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return <Main />;
}

export default App;
