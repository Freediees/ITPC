import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import AddExporterPage from 'Organism/AddExporterPage'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AddExporterScreen = ({ navigation, route }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    console.log('exporter', route.params.exporter)

    const onSubmit = async ({ name, address, phone, office_phone, fax, email, link, logo }) => {

        const resLogo = await onPostImage(logo)

        let formData = new FormData()

        formData.append('id', await AsyncStorage.getItem('user_id'))
        formData.append('name', name)
        formData.append('address', address)
        formData.append('phone', phone)
        formData.append('office_phone', office_phone)
        formData.append('fax', fax)
        formData.append('email', email)
        formData.append('link', link)
        formData.append('logo', resLogo)

        setIsLoading(true)
        axios.post("https://itpc-barcelona.es/API/update_detail_exporter", formData)
            .then(async (res) => {
                console.log('add exporter response', res)
                if (res?.data?.status) {
                    Alert.alert('Success', res.data.message)
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

    const onPostImage = async (logo) => {
        //console.log('logo url', logo)

        let formData = new FormData()

        formData.append('logo', { uri: logo, name: 'hemeh.jpg', type: 'image/jpeg' })

        let token = await AsyncStorage.getItem('token')
        let header = {
            'auth_code': token,
            'Content-Type': 'application/json',
            'Authorization': token
        }

        setIsLoading(true)
        axios.post("https://itpc-barcelona.es/API/submit_image_logo", formData, {
            headers: header
        })
            .then(async (res) => {
                if (res?.data?.status) {
                    return res.data.data
                } else {
                    Alert.alert("Error", res.data.message)
                    return null
                }
                setIsLoading(false)
            })
            .catch((e) => {
                setIsLoading(false)
                console.log(e)
                return null
            })
    }

    return (
        <AddExporterPage navigation={navigation} onSubmit={onSubmit} exporter={route.params.exporter} />
    )
}

export default AddExporterScreen