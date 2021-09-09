import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import AccountPage from '../components/organism/AccountPage'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import _ from 'lodash'

const AccountScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    const [exporter, setExporter] = useState([])

    const [category, setCategory] = useState([])
    const [sub, setSub] = useState([])

    const onLogout = async () => {

        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('user_id')
        navigation.replace('LoginScreen')
    }

    const fetchData = async () => {
        let formData = new FormData()
        formData.append('user_id', await AsyncStorage.getItem('user_id'))

        setIsLoading(true)
        axios.post("https://itpc-barcelona.es/API/account_status", formData)
            .then((res) => {
                console.log('account status', res)
                setData(res.data)
                setIsLoading(false)
            })
            .catch((e) => {

                setIsLoading(false)
                console.log(e)
            })
    }

    const fetchCompany = async () => {
        let formData = new FormData()

        let token = await AsyncStorage.getItem('token')
        let header = {
            'auth_code': token,
            'Content-Type': 'application/json',
            'Authorization': token
        }

        formData.append('exporter_id', await AsyncStorage.getItem('user_id'))

        setIsLoading(true)
        axios.post("https://itpc-barcelona.es/API/detail_company_profile", formData, {
            headers: header
        })
            .then(async (res) => {
                if (res?.data?.status) {
                    console.log('company res', res)
                    setExporter([...res.data.data.exporter_detail])
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
        fetchData()
        fetchCompany()
    }, [])

    return <AccountPage navigation={navigation} onLogout={onLogout} data={data} isLoading={isLoading} exporter={exporter} category={category} sub={sub} />
}

export default AccountScreen