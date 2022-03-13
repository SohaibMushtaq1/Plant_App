import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Onboarding
} from '../Stack';


const Stack = createNativeStackNavigator();
export default function Main() {
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name='Onboarding' component={Onboarding}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}