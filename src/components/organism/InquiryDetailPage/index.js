import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Header from 'Atom/header'
import Button from 'Atom/button'
import { ScrollView } from 'react-native-gesture-handler'
import { CFonts } from 'Assets/FontConstant'
import { Colors } from 'Theme'

const InquiryDetailPage = ({ navigation, data, isLoading }) => {

    let a = 50
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Header title={"Inquiry Details"} onBackPress={() => { navigation.pop() }} />

            {
                isLoading && !data
                    ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color={Colors.blue} />
                    </View>
                    : <View style={{ flex: 1, padding: 16 }}>
                        <ScrollView>
                            <Text style={{ fontSize: 16, color: 'white', fontFamily: CFonts.bold }}>Progress ({data.progress})%</Text>
                            <Text style={{ fontSize: 16, color: 'white', fontFamily: CFonts.bold }}>Status ({data.status})</Text>
                            <View style={{ width: '100%', height: 15, backgroundColor: 'grey', marginTop: 10, borderRadius: 10, overflow: 'hidden' }}>
                                <View style={{ flex: 1, backgroundColor: 'green', width: `${parseInt(data.progress)}%`, borderRadius: 10 }}></View>
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <Button label="Importer List" style={{ marginVertical: 5 }} textStyle={{ color: 'black', fontSize: 14 }} />
                                <Button label="Inbox" style={{ marginVertical: 5 }} textStyle={{ color: 'black', fontSize: 14 }} />
                                <Button label="Additional File" style={{ marginVertical: 5 }} textStyle={{ color: Colors.blue, fontSize: 14 }} onPress={() => { navigation.push('AdditionalScreen', { id: data.inquiry_id }) }} />
                            </View>

                            <View>
                                <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>Inquiry Title</Text>
                                <Text style={{ fontSize: 12, color: 'grey', marginTop: 5 }}>{data?.inquiry_title || ""}</Text>

                                <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>Company Name</Text>
                                <Text style={{ fontSize: 12, color: 'grey', marginTop: 5 }}>{data?.exporter_name || ""}</Text>

                                <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>Company Address</Text>
                                <Text style={{ fontSize: 12, color: 'grey', marginTop: 5 }}>{data?.exporter_address || ""}</Text>

                                <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>Product Category</Text>
                                <Text style={{ fontSize: 12, color: 'grey', marginTop: 5 }}>{data?.category_title || ""}</Text>

                                <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>Product Detail</Text>
                                <Text style={{ fontSize: 12, color: 'grey', marginTop: 5 }}>{data?.product_detail || ""}</Text>

                                <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>Product Capacity</Text>
                                <Text style={{ fontSize: 12, color: 'grey', marginTop: 5 }}>{data?.product_capacity || ""}</Text>


                                <Text style={{ fontSize: 20, color: 'white', marginTop: 30, fontFamily: CFonts.bold }}>Contact Person</Text>

                                <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>Name</Text>
                                <Text style={{ fontSize: 12, color: 'grey', marginTop: 5 }}>{data?.contact_name || ""}</Text>

                                <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>Email</Text>
                                <Text style={{ fontSize: 12, color: 'grey', marginTop: 5 }}>{data?.contact_email || ""}</Text>

                                <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>Phone</Text>
                                <Text style={{ fontSize: 12, color: 'grey', marginTop: 5 }}>{data?.contact_phone || ""}</Text>

                                <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>Created By</Text>
                                <Text style={{ fontSize: 12, color: 'grey', marginTop: 5 }}>{data?.created_by || ""}</Text>

                                <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>Date Created</Text>
                                <Text style={{ fontSize: 12, color: 'grey', marginTop: 5 }}>{data?.post_date || ""}</Text>


                                <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>Last Update</Text>
                                <Text style={{ fontSize: 12, color: 'grey', marginTop: 5 }}>{data?.update_date || ""}</Text>




                            </View>
                        </ScrollView>
                    </View>
            }

        </View>
    )
}

export default InquiryDetailPage