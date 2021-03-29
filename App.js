import React from 'react';

import { Ionicons } from '@expo/vector-icons'; 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeView from './views/HomeView';
import DetailView from './views/DetailView';
import NotificationsView from './views/NotificationView';
import SettingsView from './views/SettingsView';

const Tab = createBottomTabNavigator();
const FeedStack = createStackNavigator();

const FeedView = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Home" component={HomeView} />
      <FeedStack.Screen name="Details" component={DetailView} />
    </FeedStack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Feed') {
              iconName = focused ? 'book' : 'book-outline';
            
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Feed" component={FeedView} />
        <Tab.Screen name="Notifications" component={NotificationsView} />
        <Tab.Screen name="Settings" component={SettingsView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
