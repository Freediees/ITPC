import React, { useEffect, useState } from 'react'
import HomePage from '../components/organism/HomePage'
import axios from 'axios'

const HomeScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    const fetchData = () => {
        setIsLoading(true)
        axios.get("https://itpc-barcelona.es/API/home")
            .then((res) => {
                setData(res.data.data)
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


    return <HomePage isLoading={isLoading} data={data} navigation={navigation} />
}

export default HomeScreen