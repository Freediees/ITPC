import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { Picker } from 'native-base'

import Button from 'Atom/button'
import Header from 'Atom/header'

import { Colors } from 'Theme'


const UpdateCategoryPage = ({ navigation, category, sub, curr, postCategory, isLoading }) => {

    const [data, setData] = useState([])

    const [selectedCat, setSelectedCat] = useState("")
    const [selectedSub, setSelectedSub] = useState("")

    const validate = () => {
        postCategory({ category: selectedCat, sub: selectedSub })
    }

    const renderCurr = (item) => {
        return (
            <View style={styles.currView}>
                <Text style={{ color: 'white', fontSize: 14 }}>Category : {item.title}</Text>
                <Text style={{ color: 'white', fontSize: 14 }}>Sub Category : {item.sub_title}</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Header title={"Update Category"} onBackPress={() => { navigation.pop() }} />
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ padding: 16 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: 20 }}>
                        Category
                    </Text>
                    <Text style={{ fontSize: 12, color: 'white', marginVertical: 20 }}>
                        {"What kind of products your company produce?"}
                    </Text>

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

                    {
                        isLoading
                            ? <View style={{ width: '100%', backgroundColor: Colors.blue, height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
                                <ActivityIndicator color={'white'} />
                            </View>
                            : <Button label="Add Category" bgColor={Colors.blue} style={{ marginTop: 10, marginBottom: 20 }} onPress={() => { validate() }} />

                    }


                    {
                        curr.length > 0
                            ? curr.map((item) => renderCurr(item))
                            : null
                    }

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