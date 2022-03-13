import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Screen1
} from '../../Screens';


const Stack = createNativeStackNavigator();
export default function Onboarding() {
  return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name='Screen1' component={Screen1}/>
        </Stack.Navigator>
  );
}