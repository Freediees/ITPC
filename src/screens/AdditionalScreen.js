import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import AdditionalPage from 'Organism/AdditionalPage'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AdditionalScreen = ({ navigation, route }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    const onPostImage = async (logo, name) => {



        let formData = new FormData()

        formData.append('files', { uri: logo, name: name, type: 'image/jpeg' })

        let token = await AsyncStorage.getItem('token')
        let header = {
            'auth_code': token,
            'Content-Type': 'application/json',
            'Authorization': token
        }

        setIsLoading(true)
        let res = await axios.post("https://itpc-barcelona.es/API/submit_inquiry_file", formData, {
            headers: header
        })
            .then(async (res) => {
                if (res?.data?.status) {
                    setIsLoading(false)
                    return res.data.data
                } else {
                    Alert.alert("Error", res.data.message)
                    setIsLoading(false)
                    return null
                }

            })
            .catch((e) => {
                setIsLoading(false)
                return null
            })

        return res
    }

    const onSubmit = async (logo, name) => {
        let a = await onPostImage(logo, name)

        setIsLoading(true)

        let formData = new FormData()

        formData.append('inquiry_id', route.params.id || 0)
        formData.append('user_id', await AsyncStorage.getItem('user_id'))
        formData.append('file_patch', a)

        let token = await AsyncStorage.getItem('token')
        let header = {
            'auth_code': token,
            'Content-Type': 'application/json',
            'Authorization': token
        }


        axios.post(
            `https://itpc-barcelona.es/API/submit_data_inquiry_file`,
            formData,
            { headers: header }
        )
            .then((res) => {
                if (res.data.status) {
                    Alert.alert("Success", res.data.message)

                    fetchData()

                    navigation.pop()
                }
                setIsLoading(false)
            })
            .catch((e) => {
                setIsLoading(false)
                console.log(e)
            })
    }

    const fetchData = async () => {
        setIsLoading(true)

        let formData = new FormData()

        formData.append('id', route.params.id || 0)

        let token = await AsyncStorage.getItem('token')
        let header = {
            'auth_code': token,
            'Content-Type': 'application/json',
            'Authorization': token
        }


        axios.post(
            `https://itpc-barcelona.es/API/inquiry_file`,
            formData,
            { headers: header }
        )
            .then((res) => {
                console.log('res', res)
                if (res.data.status) {
                    setData([...res.data.data])
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

    return <AdditionalPage onSubmit={onSubmit} isLoading={isLoading} data={data} />
}

export default AdditionalScreen