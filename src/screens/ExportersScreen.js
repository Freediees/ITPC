import React, { useState, useEffect } from 'react'
import ExportersPage from '../components/organism/ExportersPage'
import axios from 'axios'

let formData = new FormData()

const ExportersScreen = ({ navigation, route }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    const fetchData = () => {
        setIsLoading(true)

        formData.append('id', route.params.id || 0)

        axios.post(
            `https://itpc-barcelona.es/API/exporter_detail`,
            formData
        )
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

    return <ExportersPage isLoading={isLoading} data={data} navigation={navigation} />
}

export default ExportersScreen