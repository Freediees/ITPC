import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import Button from 'Atom/button'
import TextInput from 'Atom/customTextInput'

import { Colors } from 'Theme'


const LoginPage = ({ isLoading, onLogin }) => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    return (
        <View style={{ flex: 1, backgroundColor: 'black', padding: 25 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: '20%' }}>
                Login
                </Text>
            <Text style={{ fontSize: 12, color: 'white', marginVertical: 20 }}>
                {"Sign in to your account \nDidn't have an account? Register here"}
            </Text>

            <View style={{ flex: 1, alignItems: 'center' }}>
                <TextInput containerStyle={{ backgroundColor: 'white' }} iconName={'mail-outline'} placeholder={"Email"} onChangeText={(text) => { setEmail(text) }} />
                <TextInput containerStyle={{ backgroundColor: 'white' }} iconName={'key-outline'} placeholder={"Password"} onChangeText={(text) => { setPass(text) }} secure={true} />

                <Button label="Login" bgColor={Colors.blue} style={{ margin: 10 }} onPress={() => { onLogin({ email: email, password: pass }) }} />
            </View>
        </View>
    )
}

export default LoginPage