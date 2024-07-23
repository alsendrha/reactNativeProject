import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../screens/Main';

const tab = createBottomTabNavigator();

const Tab = () => {
  return (
    <tab.Navigator>
      <tab.Screen name="Home" component={Main} />
    </tab.Navigator>
  );
};

export default Tab;
