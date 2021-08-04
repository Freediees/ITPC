import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import OnboardingPage from 'Organism/OnboardingPage'

const OnboardingScreen = ({ navigation }) => {
    return (
        <OnboardingPage navigation={navigation} />
    )
}

export default OnboardingScreen