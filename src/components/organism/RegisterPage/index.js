import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Header from 'Atom/header'
import Button from 'Atom/button'
import TextInput from 'Atom/customTextInput'

import { Colors } from 'Theme'


const RegisterPage = ({ isLoading, onSubmit, navigation }) => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [repass, setRepass] = useState("")
    const [error, setError] = useState("")

    const validation = () => {
        if (pass.length < 6) {
            setError("Password Should Be 6 Character or More")
        } else if (pass !== repass) {
            setError("password Not Match")
        } else if (email && pass && repass) {
            setError("")
            onSubmit({ email: email, password: pass, confPass: repass })
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Header title="" onBackPress={() => { navigation.pop() }} />
            <View style={{ flex: 1, padding: 25 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: '20%' }}>
                    Register
                </Text>
                <Text style={{ fontSize: 12, color: 'white', marginVertical: 20 }}>
                    {"Create an ITPC account \nwith your email"}
                </Text>

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TextInput containerStyle={{ backgroundColor: 'white' }} iconName={'mail-outline'} placeholder={"Email"} onChangeText={(text) => { setEmail(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white' }} iconName={'key-outline'} placeholder={"Password"} onChangeText={(text) => { setPass(text) }} secure={true} />
                    <TextInput containerStyle={{ backgroundColor: 'white' }} iconName={'key-outline'} placeholder={"Password"} onChangeText={(text) => { setRepass(text) }} secure={true} />
                    {
                        error
                            ? <View style={{ backgroundColor: '#FFDAB9', padding: 5, alignItems: 'center', justifyContent: 'center', width: '100%', marginVertical: 10, borderRadius: 10 }}>
                                <Text style={{ color: 'red' }}>{error}</Text>
                            </View>
                            : null
                    }
                    {
                        isLoading
                            ? <View style={{ width: '100%', height: 40, backgroundColor: Colors.blue, borderRadius: 10, justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <ActivityIndicator size="large" color="white" />
                            </View>
                            : <Button label="Register" bgColor={Colors.blue} style={{ margin: 10 }} onPress={() => { validation() }} />
                    }

                </View>
            </View>
        </View>
    )
}

export default RegisterPage