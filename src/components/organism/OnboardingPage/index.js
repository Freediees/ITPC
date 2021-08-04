import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Button from 'Atom/button'
import { Colors } from 'Theme';

const slides = [
    {
        key: 'one',
        title: `Welcome to \nITPC Barcelona \nOfficial Mobile App`,
        text: 'Description.\nSay something cool',
        image: require('Assets/images/asset1.jpg'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 'two',
        title: `What is ITPC Barcelona \nMobile App`,
        text: 'ITPC Barcelona Spain Mobile Application is an integrated online apps that enables user to enhance two-way trade engagements and expected to bridge and connect potential traders between Indonesian and Spain',
        image: require('Assets/images/asset2.jpg'),
        backgroundColor: '#febe29',
    },
    {
        key: 'three',
        title: 'Trade With\nIndonesian Exporter',
        text: `Through ITPC Barcelona Spain Mobile Application, Indonesia's Exporters could offer their products to the abroad buyers and on the other side, buyers could find good product suppliers from Indonesia's company`,
        image: require('Assets/images/asset3.jpg'),
        backgroundColor: '#22bcb5',
    }
]

const OnboardingPage = ({ navigation }) => {

    const { headerText, descText } = styles
    const [initial, setInitial] = useState(true)

    useEffect(async () => {
        setInitial(await AsyncStorage.getItem('initial'))
    }, [])

    const _renderItem = ({ item, index }) => {
        if (index == 0) {
            return (
                <View style={styles.container}>
                    {/* <Image source={item.image} resizeMode={"cover"} style={{ height: '100%', width: '100%' }} /> */}
                    <Text style={headerText}>{item.title}</Text>
                </View>
            )
        } else if (index == 1) {
            return (
                <View style={[styles.container, { justifyContent: 'flex-start' }]}>
                    {/* <Image source={item.image} resizeMode={"cover"} style={{ height: '100%', width: '100%' }} /> */}
                    <Text style={headerText}>{item.title}</Text>
                    <Text style={descText}>{item.text}</Text>
                </View>
            )
        } else if (index == 2) {
            return (
                <View style={[styles.container, { justifyContent: 'flex-start' }]}>
                    {/* <Image source={item.image} resizeMode={"cover"} style={{ height: '100%', width: '100%' }} /> */}
                    <Text style={headerText}>{item.title}</Text>
                    <Text style={descText}>{item.text}</Text>

                    <View style={{ position: 'absolute', bottom: 70, width: '100%', alignSelf: 'center' }}>
                        <Button label="Start" onPress={() => { _onDone() }} style={{ backgroundColor: 'green', borderRadius: 50, height: 40 }} />
                    </View>
                </View>
            )
        }

    }

    const _onDone = async () => {
        await AsyncStorage.setItem('initial', 'true')
        navigation.replace('route2')
    }

    const _renderContent = () => {
        if (!initial) {
            return (
                <AppIntroSlider
                    renderItem={_renderItem}
                    data={slides}
                    onDone={_onDone}
                    showNextButton={false}
                    showDoneButton={false}
                />
            )
        } else {
            _onDone()
            return (
                <View style={{ flex: 1, backgroundColor: Colors.blue }}>

                </View>
            )
        }
    }

    return (
        <View style={{ flex: 1 }}>
            {
                _renderContent()
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
        padding: 30,
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    descText: {
        fontSize: 15,
        color: 'white',
        marginTop: 20
    }
})

export default OnboardingPage