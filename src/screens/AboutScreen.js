import React, { useState, useEffect } from 'react'
import AboutPage from 'Organism/AboutPage'
import axios from 'axios'

const AboutScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    const fetchData = () => {
        setIsLoading(true)
        axios.get("https://itpc-barcelona.es/API/about")
            .then((res) => {
                setData(res.data)
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
        <AboutPage isLoading={isLoading} data={data} navigation={navigation} />
    )
}

export default AboutScreen