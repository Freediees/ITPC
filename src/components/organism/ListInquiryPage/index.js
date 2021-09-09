import React from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import Header from 'Atom/header'
import { CFonts } from 'Assets/FontConstant'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { Colors } from 'Theme'

const ListInquiryPage = ({ navigation, isLoading, data }) => {

    const renderList = (item, index) => {
        console.log(item, index)
        return (
            <TouchableOpacity activeOpacity={1} style={{ marginVertical: 5, width: '100%', flexDirection: 'row', borderBottomWidth: 1, borderColor: 'white', borderRadius: 5, paddingVertical: 5 }} onPress={() => { navigation.push('InquiryDetailScreen', { id: item.inquiry_id }) }}>
                <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>{index}</Text>
                </View>
                <View style={{ width: '70%' }}>
                    <Text style={{ color: Colors.blue, fontSize: 16 }}>{item.inquiry_title}</Text>
                    <Text style={{ color: 'white', fontSize: 10 }}>{item.category_title}</Text>
                    <Text style={{ color: 'grey', fontSize: 12 }}>{item.post_date}</Text>
                </View>
                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>{item.progress}%</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Header title="List Inquiry" onBackPress={() => { navigation.pop() }} />
            <View style={{ flexDirection: 'row', backgroundColor: 'gray', padding: 10 }}>
                <Text style={{ color: 'white', width: '10%' }}>No.</Text>
                <Text style={{ color: 'white', width: '70%' }}>Inquiry List</Text>
                <Text style={{ color: 'white', width: '20%', textAlign: 'right' }}>Progress</Text>
            </View>
            <View style={{ padding: 10 }}>
                {
                    isLoading
                        ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator color={Colors.blue} size="large" />
                        </View>
                        : data ? data.map((item, index) => renderList(item, index)) : null
                }
            </View>
        </View>
    )
}

export default ListInquiryPage