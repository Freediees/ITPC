import React, { useEffect, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Icon } from 'native-base'


const CustomTextInput = ({ containerStyle, textStyle, iconName, placeholder, onChangeText, secure, onShowText }) => {

    const [safe, setSafe] = useState(true)

    useEffect(() => {
        if (secure) {
            setSafe(secure)
        }
    }, [])

    return (
        <View style={[{ width: '100%', height: 50, borderRadius: 10, padding: 10, marginTop: 5, flexDirection: 'row', alignItems: 'center' }, containerStyle]}>
            <Icon type="Ionicons" name={iconName} style={{ fontSize: 15, color: 'grey', marginRight: 10 }} />
            <TextInput placeholder={placeholder} style={{ flex: 1, height: 50 }} onChangeText={onChangeText} secureTextEntry={secure ? safe : false} />
            {
                secure ? <Icon type="Ionicons" name={safe ? 'eye' : 'eye-off'} style={{ fontSize: 15, color: 'grey', marginRight: 10 }} onPress={() => { setSafe(!safe) }} /> : null
            }
        </View>
    )
}

export default CustomTextInput