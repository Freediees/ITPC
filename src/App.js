import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import OnboardingScreen from './screens/OnboardingScreen'

import HomeScreen from './screens/HomeScreen'
import ExportersScreen from './screens/ExportersScreen'
import AccountScreen from './screens/AccountScreen'
import NewsDetailScreen from './screens/NewsDetailScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import ExporterListScreen from './screens/ExporterListScreen'

const OnboardingStack = createStackNavigator()
const MainStack = createStackNavigator()
const MainTabs = createBottomTabNavigator()
const HomeStack = createStackNavigator()

const OnboardingStackScreen = () => (
    <OnboardingStack.Navigator headerMode={false}>
        <OnboardingStack.Screen name='Onboarding' component={OnboardingScreen} />
    </OnboardingStack.Navigator>
)

const HomeStackScreen = () => (
    <HomeStack.Navigator initialRouteName="HomeScreen" headerMode={false}>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
        <HomeStack.Screen name="NewsDetailScreen" component={NewsDetailScreen} />
        <HomeStack.Screen name="AboutScreen" component={AboutScreen} />
        <HomeStack.Screen name="ContactScreen" component={ContactScreen} />
        <HomeStack.Screen name="ExportersScreen" component={ExportersScreen} />
    </HomeStack.Navigator>
)

const MainTabsScreen = () => (
    <MainTabs.Navigator initialRouteName="Home">
        <MainTabs.Screen name="Home" component={HomeStackScreen} />
        <MainTabs.Screen name="Exporters" component={ExporterListScreen} />
        <MainTabs.Screen name="Account" component={AccountScreen} />
    </MainTabs.Navigator>
)

const MainStackScreen = () => (
    <MainStack.Navigator headerMode={false}>
        <MainStack.Screen name="route1" component={OnboardingStackScreen} />
        <MainStack.Screen name="route2" component={MainTabsScreen} />
    </MainStack.Navigator>
)


const App = () => {
    return (
        <NavigationContainer>
            <MainStackScreen />
        </NavigationContainer>
    )
}

export default App