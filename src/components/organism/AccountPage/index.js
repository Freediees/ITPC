import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import Button from '../../atom/button'
import Header from 'Atom/header'
import { CFonts } from 'Assets/FontConstant'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

import { Colors } from '../../../theme'

const ListItem = ({ label, onPress, icon, type }) => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', borderBottomColor: 'black', borderBottomWidth: 0.5, paddingVertical: 10, marginVertical: 5, alignItems: 'center' }} onPress={onPress}>
            <Icon type={type} name={icon} style={{ fontSize: 25, color: Colors.blue, marginRight: 10 }} />
            <Text>{label || ""}</Text>
        </TouchableOpacity>
    )
}

const AccountPage = ({ navigation, onLogout, data, isLoading }) => {


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header title="Account" rightText="Logout" rightPress={() => { onLogout() }} />
            {
                isLoading && !data
                    ? <SkeletonPlaceholder>
                        <View style={{ width: '100%', height: 100 }} />
                        <View style={{ width: 300, height: 40, marginTop: 20 }} />
                        <View style={{ width: '100%', height: 100, marginTop: 20 }} />
                    </SkeletonPlaceholder>
                    : <View style={{ flex: 1 }}>
                        <View style={{ width: '100%', backgroundColor: Colors.ghostWhite, padding: 16, paddingVertical: 32 }}>
                            <Text style={{ fontSize: 14, fontFamily: CFonts.bold, color: 'black' }}>{data?.email || ""}</Text>
                            <Text style={{ fontSize: 12, fontFamily: CFonts.regular, color: Colors.blue }}>Edit Account</Text>
                        </View>
                        <View style={{ flex: 1, padding: 16 }}>
                            <Text style={{ fontSize: 18, fontFamily: CFonts.bold, color: 'black', marginBottom: 20 }}>Exporter Profile</Text>

                            <ListItem label="Edit Exporter Profile" onPress={() => { navigation.push('AddExporterScreen') }} icon="edit" type="FontAwesome" />
                            <ListItem label="Update Category" onPress={() => { console.log('update category') }} icon="addfile" type="AntDesign" />
                            <ListItem label="Update Product" onPress={() => { console.log('Update product') }} icon="addfile" type="AntDesign" />
                        </View>
                    </View>
            }


        </View>
    )
}

export default AccountPage