import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from 'Atom/header'
import Button from 'Atom/button'
import TextInput from 'Atom/customTextInput'

import { Colors } from 'Theme'

const AddExporterPage = ({ navigation, onSubmit }) => {

    const [companyName, setCompanyName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [phone, setPhone] = useState("")
    const [fax, setFax] = useState("")
    const [website, setWebsite] = useState("")

    const validate = () => {
        onSubmit({
            name: companyName,
            address: address,
            email: email,
            phone: mobile,
            office_phone: phone,
            fax: fax,
            link: website,
            logo: ""
        })
    }

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

                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Company Name"} onChangeText={(text) => { setCompanyName(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Address"} onChangeText={(text) => { setAddress(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Email"} onChangeText={(text) => { setEmail(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Mobile Phone"} onChangeText={(text) => { setMobile(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Office Phone"} onChangeText={(text) => { setPhone(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Fax Number"} onChangeText={(text) => { setFax(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Website Link"} onChangeText={(text) => { setWebsite(text) }} />

                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginTop: 20 }}>Company logo (500 x 500)</Text>


                    <Button label="Choose File" bgColor={Colors.ghostWhite} style={{ marginTop: 10 }} textStyle={{ color: Colors.blue }} onPress={() => { }} />
                    <Button label="Submit" bgColor={Colors.blue} style={{ marginTop: 10 }} onPress={() => { validate() }} />
                </ScrollView>
            </View>
        </View>
    )
}

export default AddExporterPage