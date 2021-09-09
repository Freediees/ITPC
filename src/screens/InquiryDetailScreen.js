import React, { useState, useEffect } from 'react'
import { View, Alert } from 'react-native'
import InquiryDetailPage from 'Organism/InquiryDetailPage'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const InquiryDetailScreen = ({ navigation, route }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)

    const fetchData = async () => {
        let formData = new FormData()

        let token = await AsyncStorage.getItem('token')
        let header = {
            'auth_code': token,
            'Content-Type': 'application/json',
            'Authorization': token
        }

        formData.append('inquiry_id', await route.params.id)

        setIsLoading(true)
        axios.post("https://itpc-barcelona.es/API/detail_inquiry", formData, {
            headers: header
        })
            .then(async (res) => {
                if (res?.data?.status) {
                    console.log('success')
                    console.log('res', res)
                    setData({ ...res.data.data.detail[0] })
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
    }, [])


    return <InquiryDetailPage isLoading={isLoading} data={data} navigation={navigation} />
}

export default InquiryDetailScreen