import React, { useState, useEffect } from 'react'
import NewsDetailPage from 'Organism/NewsDetailPage'
import axios from 'axios'

let formData = new FormData()


const NewsDetailScreen = ({ route, navigation, ...props }) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = (id) => {
        setIsLoading(true)
        formData.append('news_id', id)
        axios.post(
            "https://itpc-barcelona.es/API/detail_news",
            formData
        ).then((res) => {
            setIsLoading(false)
            console.log('res', res)
            setData(res.data.data[0])
        }).catch((e) => {
            setIsLoading(false)
            console.log(e)
        })
    }

    useEffect(() => {
        fetchData(route.params.id)
    }, [])
    return <NewsDetailPage data={data} isLoading={isLoading} navigation={navigation} />
}

export default NewsDetailScreen