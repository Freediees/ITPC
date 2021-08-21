import React, { useState, useEffect } from 'react'
import ExporterListPage from 'Organism/ExporterListPage'
import axios from 'axios'

let formData = new FormData()

const ExporterListScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    const fetchData = () => {
        setIsLoading(true)

        formData.append('page', 0)
        formData.append('data_type', 'category')

        axios.post(
            `https://itpc-barcelona.es/API/exporter`,
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

    return (
        <ExporterListPage navigation={navigation} data={data} isLoading={isLoading} />
    )
}

export default ExporterListScreen