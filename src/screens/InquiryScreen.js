import React, { useState, useEffect } from 'react'
import { View, Alert } from 'react-native'
import InquiryPage from 'Organism/InquiryPage'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const InquiryScreen = ({ navigation, route }) => {

    const [category, setCategory] = useState([])
    const [sub, setSub] = useState([])
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

        formData.append('exporter_id', await AsyncStorage.getItem('user_id'))

        setIsLoading(true)
        axios.post("https://itpc-barcelona.es/API/add_inquiry", formData, {
            headers: header
        })
            .then(async (res) => {
                if (res?.data?.status) {
                    console.log('success')
                    console.log(res)
                    setCategory([...res.data.data.category])
                    setSub([...res.data.data.subcategory])
                    setData(res.data.data.exporter_inquiry[0])
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

    const onPostData = async ({
        title,
        companyName,
        address,
        detail,
        capacity,
        exportStatus,
        name,
        email,
        phone,
        categories,
        subcategories,
    }) => {

        let formData = new FormData()

        let token = await AsyncStorage.getItem('token')
        let header = {
            'auth_code': token,
            'Content-Type': 'application/json',
            'Authorization': token
        }

        formData.append('exporter_id', await AsyncStorage.getItem('user_id'))
        formData.append('inquiry_title', title)
        formData.append('exporter_name', companyName)
        formData.append('exporter_address', address)
        formData.append('inquiry_title', title)
        formData.append('category_id', categories)
        formData.append('subcategory_id', subcategories)
        formData.append('product_detail', detail)
        formData.append('product_capacity', capacity)
        formData.append('have_export', exportStatus)
        formData.append('contact_name', name)
        formData.append('contact_email', email)
        formData.append('contact_phone', phone)

        setIsLoading(true)
        axios.post("https://itpc-barcelona.es/API/submit_inquiry", formData, {
            headers: header
        })
            .then(async (res) => {
                if (res?.data?.status) {
                    console.log('submit success')
                    console.log(res)
                    Alert.alert("Success", res.data.message)
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
        fetchData()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <InquiryPage navigation={navigation} category={category} sub={sub} onPostData={onPostData} data={data} />
        </View>
    )
}

export default InquiryScreen