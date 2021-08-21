import React, { useState, useEffect } from 'react'
import ExporterListPage from 'Organism/ExporterListPage'
import axios from 'axios'



const ExporterListScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    const [dataType, setDataType] = useState('category')
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(0)

    const changeSearch = async(v) => {
        //console.log('hasil search', v)
        setSearch(v)
        await fetchData({search: v})
    }

    const resetFilter = () => {
        console.log('here')
        setDataType('category')
        setPage(0)
        setSearch("")
        fetchData({ search: "", type:"category", id: null, page: 0 })
    }

    const changeDataType = (id, type) => {

        let res = ''
        if( type == 'category'){
            res = 'subcategory'
        }else if( type == 'subcategory'){
            res = 'exporter'
        }else if( type == 'exporter'){
            navigation.push('ExportersScreen', { id: id })
        }
        else
        {
            res = 'category'
        }


        setDataType(res)
        fetchData({ type: res, id: id })
    }

    const fetchData = (item) => {

        setIsLoading(true)

        let formData = new FormData()

        formData.append('id', item?.id || null)
        formData.append('page', item?.page || page)
        formData.append('data_type', item?.type || dataType)
        formData.append('title', item?.search || search)

        axios.post(
            `https://itpc-barcelona.es/API/exporter`,
            formData
        )
            .then((res) => {
                console.log('res', res)
                setData([...res.data.data])
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
        <ExporterListPage 
            navigation={navigation} 
            data={data} 
            isLoading={isLoading} 
            changeSearch={changeSearch}
            changeDataType={changeDataType}
            resetFilter={resetFilter}
        />
    )
}

export default ExporterListScreen