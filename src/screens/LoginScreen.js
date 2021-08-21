import React, { useState, useEffect } from 'react'
import LoginPage from 'Organism/LoginPage'
import axios from 'axios'
import AsynStorage from '@react-native-async-storage/async-storage'

let formData = new FormData()

const LoginScreen = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    const login = async ({ email, password }) => {

        formData.append('email', email)
        formData.append('password', password)

        setIsLoading(true)
        axios.post("https://itpc-barcelona.es/API/login", formData)
            .then(async (res) => {
                if (res?.data?.data) {
                    await AsynStorage.setItem('token', res.data.data.auth_code)
                    await AsynStorage.setItem('user_id', res.data.data.user_id)

                    console.log('set auth success')
                }
                setIsLoading(false)
            })
            .catch((e) => {
                setIsLoading(false)
                console.log(e)
            })
    }
    useEffect(() => {

    }, [])

    return (
        <LoginPage onLogin={login} isLoading={isLoading} />
    )
}

export default LoginScreen