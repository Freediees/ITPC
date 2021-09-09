import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from 'Atom/header'
import Button from 'Atom/button'
import TextInput from 'Atom/customTextInput'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { Colors } from 'Theme'

const AddExporterPage = ({ navigation, onSubmit, exporter }) => {

    console.log(exporter.name)

    const [companyName, setCompanyName] = useState(exporter.name || "")
    const [address, setAddress] = useState(exporter.address || "")
    const [email, setEmail] = useState(exporter.email || "")
    const [mobile, setMobile] = useState(exporter.phone || "")
    const [phone, setPhone] = useState(exporter.office_phone || "")
    const [fax, setFax] = useState(exporter.fax || "")
    const [website, setWebsite] = useState(exporter.link || "")

    const [logoName, setLogoName] = useState("")
    const [logoUrl, setLogoUrl] = useState("")

    const validate = () => {
        onSubmit({
            name: companyName,
            address: address,
            email: email,
            phone: mobile,
            office_phone: phone,
            fax: fax,
            link: website,
            logo: logoUrl,
        })
    }

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

    // useEffect(() => {
    //     setCompanyName(exporter.name)
    //     setAddress(exporter.address)
    //     setEmail(exporter.email)
    //     setMobile(exporter.phone)
    //     setPhone(exporter.office_phone)
    //     setFax(exporter.fax)
    //     setWebsite(exporter.link)
    // }, [exporter])

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Header title="Add exporter" onBackPress={() => { navigation.pop() }} />
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ padding: 16 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: 20 }}>
                        Profile
                    </Text>
                    <Text style={{ fontSize: 12, color: 'white', marginVertical: 20 }}>
                        {"Create profile of your company"}
                    </Text>

                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Company Name"} value={companyName} onChangeText={(text) => { setCompanyName(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Address"} value={address} onChangeText={(text) => { setAddress(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Email"} value={email} onChangeText={(text) => { setEmail(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Mobile Phone"} value={mobile} onChangeText={(text) => { setMobile(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Office Phone"} value={phone} onChangeText={(text) => { setPhone(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Fax Number"} value={fax} onChangeText={(text) => { setFax(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Website Link"} value={website} onChangeText={(text) => { setWebsite(text) }} />

                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginTop: 20 }}>Company logo (500 x 500)</Text>
                    {
                        logoName ? <Text style={{ color: 'white' }}>{logoName}</Text> : null
                    }


                    <Button label="Choose File" bgColor={Colors.ghostWhite} style={{ marginTop: 10 }} textStyle={{ color: Colors.blue }} onPress={() => { onSelectImage() }} />
                    <Button label="Submit" bgColor={Colors.blue} style={{ marginTop: 10 }} onPress={() => { validate() }} />
                </ScrollView>
            </View>
        </View>
    )
}

export default AddExporterPage