import React, { useState, useEffect } from 'react'
import { View, Alert } from 'react-native'
import ListInquiryPage from 'Organism/ListInquiryPage'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ListInquiryScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    const fetchData = async () => {
        let formData = new FormData()

        let token = await AsyncStorage.getItem('token')
        let header = {
            'auth_code': token,
            'Content-Type': 'application/json',
            'Authorization': token
        }

        formData.append('exporter_id', await AsyncStorage.getItem('user_id'))

        setIsLoading(true)
        axios.post("https://itpc-barcelona.es/API/list_inquiry", formData, {
            headers: header
        })
            .then(async (res) => {
                if (res?.data?.status) {
                    console.log('success')
                    console.log('res', res)
                    setData([...res.data.data])
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

    return <ListInquiryPage data={data} navigation={navigation} />
}

export default ListInquiryScreen