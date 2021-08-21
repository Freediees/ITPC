import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import OnboardingScreen from './screens/OnboardingScreen'

import HomeScreen from './screens/HomeScreen'
import ExportersScreen from './screens/ExportersScreen'
import AccountScreen from './screens/AccountScreen'
import NewsDetailScreen from './screens/NewsDetailScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import ExporterListScreen from './screens/ExporterListScreen'
import LoginScreen from './screens/LoginScreen'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const OnboardingStack = createStackNavigator()
const MainStack = createStackNavigator()
const MainTabs = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const AccountStack = createStackNavigator()

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

const AccountStackScreen = () => (
    <AccountStack.Navigator headerMode={false}>
        <AccountStack.Screen name={"AccountScreen"} component={AccountScreen} />
        <AccountStack.Screen name={"LoginScreen"} component={LoginScreen} />
    </AccountStack.Navigator>
)

const MainTabsScreen = () => (
    <MainTabs.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = 'home-outline'
                } else if (route.name === 'Exporters') {
                    iconName = 'swap-vertical'
                } else {
                    iconName = 'person-circle-outline'
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: Colors.blue,
            inactiveTintColor: 'gray',
        }}
    >
        <MainTabs.Screen name="Home" component={HomeStackScreen} />
        <MainTabs.Screen name="Exporters" component={ExporterListScreen} />
        <MainTabs.Screen name="Account" component={AccountStackScreen} />
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