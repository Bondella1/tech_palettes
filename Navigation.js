import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import MyComponent from './MyComponent';
import Dashboard from './screens/Dashboard';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MyComponent" component={MyComponent} />
      <Stack.Screen name="Dashboard" component={Dashboard} />      
    </Stack.Navigator>
  );
};

export default Navigation;
