import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import AddExporterPage from 'Organism/AddExporterPage'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AddExporterScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    const onSubmit = async ({ name, address, phone, office_phone, fax, email, link, logo }) => {
        let formData = new FormData()

        formData.append('id', await AsyncStorage.getItem('user_id'))
        formData.append('name', name)
        formData.append('address', address)
        formData.append('phone', phone)
        formData.append('office_phone', office_phone)
        formData.append('fax', fax)
        formData.append('email', email)
        formData.append('link', link)
        formData.append('logo', logo)

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

    return (
        <AddExporterPage navigation={navigation} onSubmit={onSubmit} />
    )
}

export default AddExporterScreen