import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import OnboardingPage from 'Organism/OnboardingPage'
import AsyncStorage from '@react-native-async-storage/async-storage'

const OnboardingScreen = ({ navigation }) => {

    const [ splash, setSplash ] = useState(true)

    const checkStatus = async() => {
        setTimeout(()=> { setSplash(false)}, 2000)

    }
    useEffect(()=>{
        checkStatus()
    },[])
    return (
        <View style={{ flex: 1 }}>
        {
            splash 
            ? <View style={{ flex: 1}}>
                <Image style={{ flex: 1, width:'100%'}} resizeMode={'cover'} source={require('Assets/images/splash.jpeg')}/>
            </View>
            : <OnboardingPage navigation={navigation} />
        }
        </View>
        
    )
}

export default OnboardingScreen