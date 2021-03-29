import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeView from './views/HomeView';
import DetailView from './views/DetailView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Details" component={DetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
