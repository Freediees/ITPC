import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import Header from 'Atom/header'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { CFonts } from 'Assets/FontConstant'
import { FlatList } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const ExportersPage = ({ isLoading, data, navigation }) => {

    const [selectedImage, setSelectedImage] = useState("")

    useEffect(() => {
        if (data?.exporter_product.length > 0) {
            setSelectedImage(data?.exporter_product[0].image_product)
        }
    }, [data])

    const renderListItem = ({ icon, label }) => {
        return (
            <View style={{ flexDirection: 'row', padding: 8, alignItems: 'center', width: '90%', marginTop: 10 }}>
                <Image style={{ width: 20, height: 20, marginRight: 20 }} resizeMode="contain" source={{ uri: icon || '' }} />
                <Text style={{ color: 'black', fontSize: 12 }}>{label}</Text>
            </View>
        )
    }

    const renderImage = (item) => {
        return (
            <TouchableOpacity onPress={() => { setSelectedImage(item.item.image_product) }}>
                <Image style={{ width: 100, height: 100, marginRight: 10 }} resizeMode="cover" source={{ uri: item.item.image_product }} />
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <Header title={"Exporters"} onBackPress={() => { navigation.pop() }} />
            {
                isLoading && !data
                    ? <SkeletonPlaceholder style={{ alignItems: 'center' }}>
                        <View style={{ width: '100%', height: 300, marginBottom: 20 }} />

                        <View style={{ width: '90%', height: 40, margin: 5 }} />
                        <View style={{ width: '90%', height: 40, margin: 5 }} />
                        <View style={{ width: '90%', height: 40, margin: 5 }} />
                    </SkeletonPlaceholder>
                    : <View style={{ flex: 1, backgroundColor: '#fff' }}>
                        <ScrollView>
                            <Image style={{ width: '100%', height: 300 }} resizeMode="contain" source={{ uri: selectedImage || '' }} />

                            <View style={{ marginBottom: 50 }}>
                                <View style={{ flexDirection: 'row', padding: 16, alignItems: 'center' }}>


                                </View>

                                <FlatList
                                    horizontal={true}
                                    style={{ minHeight: 100, backgroundColor: Colors.lightGrey, width: '100%' }}
                                    data={data?.exporter_product.length > 0 ? data?.exporter_product : []}
                                    renderItem={(item) => renderImage(item)}
                                />


                                <View style={{ width: '100%', alignItems: 'center', padding: 10 }}>
                                    <Text style={{ color: 'black' }}>{data?.exporter_detail[0]?.title}</Text>

                                    {renderListItem({ icon: data?.exporter_icon[0].icon_image, label: data?.exporter_detail[0]?.address || '' })}
                                    {renderListItem({ icon: data?.exporter_icon[1].icon_image, label: data?.exporter_detail[0]?.office_phone || '-' })}
                                    {renderListItem({ icon: data?.exporter_icon[2].icon_image, label: data?.exporter_detail[0]?.phone || '-' })}
                                    {renderListItem({ icon: data?.exporter_icon[3].icon_image, label: data?.exporter_detail[0]?.fax || '-' })}
                                    {renderListItem({ icon: data?.exporter_icon[4].icon_image, label: data?.exporter_detail[0]?.email || '-' })}
                                    {renderListItem({ icon: data?.exporter_icon[5].icon_image, label: '-' })}
                                </View>
                            </View>
                        </ScrollView>
                    </View>
            }
        </View>
    )
}

export default ExportersPage