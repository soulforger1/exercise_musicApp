import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Browse, Account, Search} from '../screens';
import {TabBar} from '../components/tabBar';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="browse" component={Browse} />
      <Tab.Screen name="account" component={Account} />
      <Tab.Screen name="search" component={Search} />
    </Tab.Navigator>
  );
};
