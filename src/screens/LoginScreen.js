import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import LoginPage from 'Organism/LoginPage'
import axios from 'axios'
import AsynStorage from '@react-native-async-storage/async-storage'

let formData = new FormData()

const LoginScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    const [initialLoading, setInitialLoading] = useState(true)

    const login = async ({ email, password }) => {

        formData.append('email', email)
        formData.append('password', password)

        setIsLoading(true)
        axios.post("https://itpc-barcelona.es/API/login", formData)
            .then(async (res) => {
                if (res?.data?.data) {
                    await AsynStorage.setItem('token', res.data.data.auth_code)
                    await AsynStorage.setItem('user_id', res.data.data.user_id)

                    navigation.replace('AccountScreen')
                }
                setIsLoading(false)
            })
            .catch((e) => {
                setIsLoading(false)
                console.log(e)
            })
    }

    const check = async () => {
        let token, user_id
        token = await AsynStorage.getItem('token')
        user_id = await AsynStorage.getItem('user_id')

        console.log('token', token)
        console.log('user_id', user_id)

        if (token && user_id) {
            navigation.replace('AccountScreen')
            setInitialLoading(false)
        }

        setInitialLoading(false)
    }

    const onRegister = () => {
        navigation.push('RegisterScreen')
    }

    useEffect(() => {
        check()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            {
                initialLoading
                    ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                        <ActivityIndicator size="large" color="blue" />
                    </View>
                    : <LoginPage onLogin={login} isLoading={isLoading} onRegister={onRegister} />

            }
        </View>


    )
}

export default LoginScreen