import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import UpdateCategoryPage from 'Organism/UpdateCategoryPage'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const UpdateCategoryScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true)

    const [category, setCategory] = useState([])
    const [sub, setSub] = useState([])
    const [curr, setCurr] = useState([])

    const fetchData = async () => {
        let formData = new FormData()

        let token = await AsyncStorage.getItem('token')
        let header = {
            'auth_code': token,
            'Content-Type': 'application/json',
            'Authorization': token
        }

        formData.append('expoter_id', await AsyncStorage.getItem('user_id'))

        setIsLoading(true)
        axios.post("https://itpc-barcelona.es/API/update_category_exporter", formData, {
            headers: header
        })
            .then(async (res) => {
                if (res?.data?.status) {
                    setCategory([...res.data.data.category])
                    setSub([...res.data.data.subcategory])
                    setCurr([...res.data.data.curr_category])
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

    const postCategory = async ({ category, sub }) => {

        let formData = new FormData()

        let token = await AsyncStorage.getItem('token')
        let header = {
            'auth_code': token,
            'Content-Type': 'application/json',
            'Authorization': token
        }

        formData.append('expoter_id', await AsyncStorage.getItem('user_id'))
        formData.append('category_id', category)
        formData.append('subcategory_id', sub)

        setIsLoading(true)
        axios.post("https://itpc-barcelona.es/API/add_category_exporter", formData, {
            headers: header
        })
            .then(async (res) => {
                if (res?.data?.status) {
                    Alert.alert("Success", res.data.message)
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
        <UpdateCategoryPage navigation={navigation} category={category} sub={sub} curr={curr} postCategory={postCategory} isLoading={isLoading} />
    )
}

export default UpdateCategoryScreen