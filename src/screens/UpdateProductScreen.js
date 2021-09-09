import React, { useEffect, useState } from 'react'
import { View, Alert } from 'react-native'
import UpdateProductPage from 'Organism/UpdateProductPage'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const UpdateProductScreen = ({ navigation }) => {

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
        axios.post("https://itpc-barcelona.es/API/update_exporter_product", formData, {
            headers: header
        })
            .then(async (res) => {
                if (res?.data?.status) {
                    console.log('res', res)
                    setData([...res.data.data])
                    // setCategory([...res.data.data.category])
                    // setSub([...res.data.data.subcategory])
                    // setCurr([...res.data.data.curr_category])
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

    const onPostImage = async (name, logo) => {
        console.log('logo url', name)

        let formData = new FormData()

        formData.append('exporter_id', await AsyncStorage.getItem('user_id'))
        formData.append('files', { uri: logo, name: name, type: 'image/jpeg' })

        let token = await AsyncStorage.getItem('token')
        let header = {
            'auth_code': token,
            'Content-Type': 'application/json',
            'Authorization': token
        }

        setIsLoading(true)
        axios.post("https://itpc-barcelona.es/API/add_exporter_product", formData, {
            headers: header
        })
            .then(async (res) => {
                console.log('res upload image', res)
                if (res?.data?.status) {
                    setIsLoading(false)
                    Alert.alert("Success", res.data.message)
                    fetchData()
                } else {
                    setIsLoading(false)
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

    const onDeleteImage = async (id) => {

        let formData = new FormData()

        formData.append('exporter_id', await AsyncStorage.getItem('user_id'))
        formData.append('ex_pro_id', id)

        let token = await AsyncStorage.getItem('token')
        let header = {
            'auth_code': token,
            'Content-Type': 'application/json',
            'Authorization': token
        }

        setIsLoading(true)
        axios.post("https://itpc-barcelona.es/API/delete_exporter_product", formData, {
            headers: header
        })
            .then(async (res) => {
                if (res?.data?.status) {
                    console.log('res', res)
                    Alert, alert("Success", res.data.message)
                    fetchData()
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
            <UpdateProductPage navigation={navigation} data={data} onPostImage={onPostImage} isLoading={isLoading} onDeleteImage={onDeleteImage} />
        </View>
    )
}

export default UpdateProductScreen