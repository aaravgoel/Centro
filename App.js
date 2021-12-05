import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ChatScreen from './screens/ChatScreen';
import PostScreen from './screens/PostScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App(a) {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Search') {
              iconName = focused
                ? 'ios-search'
                : 'ios-search-outline';
            } else if (route.name === 'Chat') {
              iconName = focused
                ? 'ios-chatbubble'
                : 'ios-chatbubble-outline';
            } else if (route.name === 'Post') {
              iconName = focused
                ? 'ios-add-circle'
                : 'ios-add-circle-outline';
            } else if (route.name === 'Profile') {
              iconName = focused
                ? 'ios-person'
                : 'ios-person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused
                ? 'ios-settings'
                : 'ios-settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'salmon',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Post" component={PostScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}