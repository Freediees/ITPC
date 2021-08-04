import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Colors } from 'Theme'

const Header = ({ style, title }) => {
    return (
        <View style={[{ width: '100%', height: 60, backgroundColor: Colors.blue, justifyContent: 'center', alignItems: 'center' }, style]}>
            <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>{title || ""}</Text>
        </View>
    )
}

export default Header