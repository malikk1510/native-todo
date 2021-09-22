import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from './signup/signup';
import Login from './login/login';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          //   options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Sigup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
