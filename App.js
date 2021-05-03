import * as React from 'react';
import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screens/MainScreen'
import Card from './components/Card'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName ="mainscreen"
      >
        <Stack.Screen
          name="mainscreen"
          component={MainScreen}
        />
        <Stack.Screen name="detailedScreen" component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;