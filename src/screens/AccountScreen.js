import React, { useEffect, useState } from 'react'
import AccountPage from '../components/organism/AccountPage'
import AsynStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const AccountScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    const onLogout = async () => {

        await AsynStorage.removeItem('token')
        await AsynStorage.removeItem('user_id')
        navigation.replace('LoginScreen')
    }

    const fetchData = async () => {
        let formData = new FormData()
        formData.append('user_id', await AsynStorage.getItem('user_id'))

        setIsLoading(true)
        axios.post("https://itpc-barcelona.es/API/account_status", formData)
            .then((res) => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch((e) => {
                setIsLoading(false)
                console.log(e)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return <AccountPage navigation={navigation} onLogout={onLogout} data={data} isLoading={isLoading} />
}

export default AccountScreen