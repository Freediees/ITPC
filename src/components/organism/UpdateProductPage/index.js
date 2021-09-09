import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import Button from 'Atom/button'
import Header from 'Atom/header'

import { Colors } from 'Theme'


const UpdateCategoryPage = ({ navigation, isLoading, data, onPostImage, onDeleteImage }) => {

    const [logoName, setLogoName] = useState("")
    const [logoUrl, setLogoUrl] = useState("")

    const onSelectImage = () => {
        launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true,
            maxHeight: 200,
            maxWidth: 200,
        },
            (response) => {
                console.log('response', response)
                setLogoName(response.assets[0].fileName)
                setLogoUrl(response.assets[0].uri)
            })
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Header title={"Update Category"} onBackPress={() => { navigation.pop() }} />
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ padding: 16 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: 20 }}>
                        Product Image
                    </Text>
                    <Text style={{ fontSize: 12, color: 'white', marginVertical: 20 }}>
                        {"Add your company products photo"}
                    </Text>


                    {
                        logoName ? <Text style={{ color: 'white' }}>{logoName}</Text> : null
                    }
                    <Button label="Choose File" bgColor={Colors.ghostWhite} style={{ marginTop: 10 }} textStyle={{ color: Colors.blue }} onPress={() => { onSelectImage() }} />
                    {
                        isLoading
                            ? <View style={{ width: '100%', backgroundColor: Colors.blue, height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
                                <ActivityIndicator color={'white'} />
                            </View> :
                            <Button label="Submit" bgColor={Colors.blue} style={{ marginTop: 10 }} onPress={() => { onPostImage(logoName, logoUrl) }} />
                    }


                    <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 20 }}>
                        {
                            data.length > 0
                                ? data.map((item) =>
                                    <View style={{ height: 150, width: 120, margin: 10 }}>
                                        <Image source={{ uri: item.image }} style={{ flex: 1 }} reszizeMode="cover" />
                                        <TouchableOpacity style={{ width: '100%', height: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }} onPress={() => { onDeleteImage(item.id) }}>
                                            <Text style={{ color: 'white' }}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                                : null

                        }
                    </View>
                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    pickerContainer: {
        height: 55,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginBottom: 20,
    },
    currView: {
        width: '100%',
        padding: 15,
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5
    }
})

export default UpdateCategoryPage