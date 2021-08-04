import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from '../screens/OnboardingScreen'
import HomeScreen from '../screens/HomeScreen'


const Stack = createStackNavigator()

const OnboardingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center'
                }}
            />
            {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
        </Stack.Navigator>
    )
}

export default OnboardingStack