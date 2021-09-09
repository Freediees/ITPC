import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Header from 'Atom/header'
import Button from 'Atom/button'
import { Colors } from 'Theme'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const AdditionalPage = ({ navigation, onSubmit, isLoading, data }) => {


    const [logoName, setLogoName] = useState(null)
    const [logoUrl, setLogoUrl] = useState(null)

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
            <Header title={"Additional Files"} onBackPress={() => { navigation.pop() }} />
            <View style={{ flex: 1, padding: 16 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 20 }}>
                    Add File
                    </Text>
                <Text style={{ fontSize: 12, color: 'white', marginVertical: 10 }}>
                    {"You can only upload images. If u want to upload a file you can do it on our website http://itpc-barcelona.es"}
                </Text>

                <View style={{ marginTop: 10 }}>
                    {
                        !!logoName && <Text style={{ color: 'white' }}>{logoName}</Text>
                    }

                    <Button label="Choose File" style={{ marginVertical: 5 }} textStyle={{ color: 'black', fontSize: 14 }} onPress={() => { onSelectImage() }} />
                    <Button label="Additional File" style={{ marginVertical: 5 }} textStyle={{ color: 'white', fontSize: 14, fontWeight: 'bold' }} bgColor={Colors.blue} onPress={() => { navigation.push('AdditionalScreen') }} onPress={() => { onSubmit(logoUrl, logoName) }} />
                </View>
            </View>

        </View>
    )
}

export default AdditionalPage