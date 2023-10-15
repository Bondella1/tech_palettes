import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import MyComponent from './screens/MyComponent';
import Dashboard from './screens/Dashboard';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MyComponent" component={MyComponent} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}