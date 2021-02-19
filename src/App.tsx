import React from 'react';
import {
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {MainNavigation} from './navigations';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
