import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Header from 'Atom/header'
import { Colors } from 'Theme'
import { Icon } from 'native-base'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { FlatList } from 'react-native-gesture-handler'


const ExporterListPage = ({ navigation, isLoading, data, changeSearch, changeDataType, resetFilter }) => {

    const [search, setSearch] = useState("")

    useEffect(()=>{
        const delay = setTimeout(()=> {
            changeSearch(search)
        },500)

        return () => clearTimeout(delay)
    },[search])

    const renderItem = (item) => {
        return (
            <TouchableOpacity 
                onPress={()=>{ changeDataType(item.item.id, item.item.curr_category)}}
                style={{ flex: 1, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 0.5, marginHorizontal: 10, borderBottomColor: Colors.lightGrey }}>
                <Text>{item.item.title}</Text>

                <View style={{ width: 30, height: 30, backgroundColor: Colors.blue, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                    <Text style={{ fontSize: 12, color: 'white' }}>{item.item.sum}</Text>
                </View>

            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }} >
            <Header title={""} onBackPress={() => { resetFilter() }} />
            <View style={{ width: '100%', backgroundColor: Colors.blue, paddingHorizontal: 20, paddingVertical: 10 }}>
                <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>Companies</Text>
                <View style={{ height: 40, width: '100%', backgroundColor: Colors.darkBlue, marginVertical: 10, borderRadius: 10, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 15 }}>
                    <Icon type="Ionicons" name={'search'} style={{ fontSize: 15, color: 'white', marginRight: 10 }} />
                    <TextInput placeholder={'Search'} placeholderTextColor={'white'} style={{ flex: 1, height: 50, color: 'white' }} onChangeText={(text) => { setSearch(text)}} />
                </View>
            </View>
            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, marginVertical: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Product Category</Text>
                <Text style={{ fontWeight: 'bold' }}>Sum</Text>
            </View>
            <View>
                {
                    isLoading
                        ? <SkeletonPlaceholder style={{ flex: 1 }}>
                            <View style={{ width: '100%', height: 40, margin: 5 }} />
                            <View style={{ width: '100%', height: 40, margin: 5 }} />
                            <View style={{ width: '100%', height: 40, margin: 5 }} />
                            <View style={{ width: '100%', height: 40, margin: 5 }} />
                            <View style={{ width: '100%', height: 40, margin: 5 }} />
                            <View style={{ width: '100%', height: 40, margin: 5 }} />
                            <View style={{ width: '100%', height: 40, margin: 5 }} />
                            <View style={{ width: '100%', height: 40, margin: 5 }} />
                            <View style={{ width: '100%', height: 40, margin: 5 }} />
                        </SkeletonPlaceholder>
                        : data ?
                        <FlatList

                        data={data}
                        renderItem={(item) => renderItem(item)}
                    />
                        : <View>
                            <Text>No data</Text>
                        </View>

                        
                }
            </View>
        </View>
    )
}

export default ExporterListPage