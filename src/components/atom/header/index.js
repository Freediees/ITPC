import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Colors } from 'Theme'
import { Icon } from 'native-base'

const Header = ({ style, title, onBackPress, rightText, rightPress, backTitle }) => {
    return (
        <View style={[{ width: '100%', height: 60, backgroundColor: Colors.blue, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }, style]}>
            {

                onBackPress ?
                    <TouchableOpacity style={{ padding: 5, position: 'absolute', left: 16, flexDirection: 'row' }} onPress={onBackPress}>
                        <Icon type="Ionicons" name="arrow-back" style={{ fontSize: 25, color: 'white' }} />
                        <Text>{backTitle}</Text>
                    </TouchableOpacity>
                    : null
            }

            {
                rightText ?
                    <TouchableOpacity style={{ padding: 5, position: 'absolute', right: 16 }} onPress={rightPress}>
                        <Text style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>{rightText || ""}</Text>
                </TouchableOpacity>
                : null

            }
            <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>{title || ""}</Text>
        </View>
    )
}

export default Header