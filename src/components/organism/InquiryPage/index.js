import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Header from 'Atom/header'
import Button from 'Atom/button'
import TextInput from 'Atom/customTextInput'
import { Picker } from 'native-base'

import { Colors } from 'Theme'

const AddExporterPage = ({ navigation, data, category, sub, onPostData }) => {



    const [companyName, setCompanyName] = useState(data?.exporter_name || "")
    const [title, setTitle] = useState("")
    const [address, setAddress] = useState(data?.exporter_address || "")
    const [detail, setDetail] = useState("")
    const [capacity, setCapacity] = useState("")
    const [exportStatus, setExportStatus] = useState("")

    const [name, setName] = useState(data?.username || "")
    const [email, setEmail] = useState(data?.email || "")
    const [phone, setPhone] = useState(data?.exporter_phone || "")

    const [selectedCat, setSelectedCat] = useState("")
    const [selectedSub, setSelectedSub] = useState("")



    const validate = () => {
        // console.log('name', name)
        // console.log('title', title)
        // console.log('status', exportStatus)

        onPostData({
            title: title,
            companyName: companyName,
            address: address,
            detail: detail,
            capacity: capacity,
            exportStatus: exportStatus,
            name: name,
            email: email,
            phone: phone,
            categories: selectedCat,
            subcategories: selectedSub
        })
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Header title="Add exporter" onBackPress={() => { navigation.pop() }} />
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ padding: 16 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 20 }}>
                        Add Inquiry
                    </Text>
                    <Text style={{ fontSize: 12, color: 'white', marginVertical: 10 }}>
                        {"Input detailed information about your inquiry"}
                    </Text>

                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Inquiry Title"} value={title} onChangeText={(text) => { setTitle(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Company Name"} value={companyName} onChangeText={(text) => { setCompanyName(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Company Address"} value={address} onChangeText={(text) => { setAddress(text) }} />
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={selectedCat}
                            onValueChange={(itemValue, itemIndex) => { setSelectedCat(itemValue) }}
                        >
                            <Picker.Item label="Category" value="" />
                            {
                                category.length > 0
                                    ? category.map((item) => <Picker.Item label={item.title} value={item.id} />)
                                    : null
                            }
                        </Picker>
                    </View>

                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={selectedSub}
                            onValueChange={(itemValue, itemIndex) => { setSelectedSub(itemValue) }}
                        >
                            <Picker.Item label="Sub Category" value="" />
                            {
                                sub.length > 0
                                    ? sub.map((item) => <Picker.Item label={item.title} value={item.id} />)
                                    : null
                            }
                        </Picker>
                    </View>
                    <TextInput multiline={true} containerStyle={{ backgroundColor: 'white', marginVertical: 5, height: 100 }} placeholder={"Product Detail"} value={detail} onChangeText={(text) => { setDetail(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Product Capacity"} value={capacity} onChangeText={(text) => { setCapacity(text) }} />
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={exportStatus}
                            onValueChange={(itemValue, itemIndex) => { setExportStatus(itemValue) }}
                        >
                            <Picker.Item label="Have Export? Choose Answer" value="" />
                            <Picker.Item label="Yes" value="1" />
                            <Picker.Item label="No" value="0" />
                        </Picker>
                    </View>


                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 20 }}>
                        Contact Person
                    </Text>
                    <Text style={{ fontSize: 12, color: 'white', marginVertical: 10 }}>
                        {"Input contact of Person in charge"}
                    </Text>

                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Full Name"} value={name} onChangeText={(text) => { setName(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Email"} value={email} onChangeText={(text) => { setEmail(text) }} />
                    <TextInput containerStyle={{ backgroundColor: 'white', marginVertical: 5 }} placeholder={"Phone/Mobile Phone"} value={phone} onChangeText={(text) => { setPhone(text) }} />




                </ScrollView>
                <View style={{ padding: 16 }}>
                    <Button label="Submit" bgColor={Colors.blue} style={{ marginTop: 10 }} onPress={() => { validate() }} />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pickerContainer: {
        height: 55,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginVertical: 5,
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

export default AddExporterPage