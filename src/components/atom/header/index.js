import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Colors } from 'Theme'
import { Icon } from 'native-base'

const Header = ({ style, title, onBackPress }) => {
    return (
        <View style={[{ width: '100%', height: 60, backgroundColor: Colors.blue, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }, style]}>
            {

                onBackPress ?
                    <TouchableOpacity style={{ padding: 5, position: 'absolute', left: 16 }} onPress={onBackPress}>
                        <Icon type="Ionicons" name="arrow-back" style={{ fontSize: 25, color: 'white' }} />
                    </TouchableOpacity>
                    : null
            }
            <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>{title || ""}</Text>
        </View>
    )
}

export default Header