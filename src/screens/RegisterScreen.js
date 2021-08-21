import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, Alert } from 'react-native'
import RegisterPage from 'Organism/RegisterPage'
import axios from 'axios'



const RegisterScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async ({ email, password, confPass }) => {

        let formData = new FormData()

        formData.append('email', email)
        formData.append('password', password)
        formData.append('conf_password', confPass)

        setIsLoading(true)
        axios.post("https://itpc-barcelona.es/API/register", formData)
            .then(async (res) => {
                console.log('register response', res)
                if (res?.data?.status) {
                    Alert.alert('Registration Success', `Congratulations, you have succesfully registered, please check your email (${email}) for account activation`)
                    navigation.pop()
                } else {
                    Alert.alert("Error", res.data.message)
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
        <View style={{ flex: 1 }}>
            <RegisterPage onSubmit={onSubmit} isLoading={isLoading} navigation={navigation} />
        </View>


    )
}

export default RegisterScreen