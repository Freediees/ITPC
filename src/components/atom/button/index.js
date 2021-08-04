import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'


const Button = ({ label, onPress, bgColor, textColor, borderColor, style, textStyle }) => {
    return (
        <TouchableOpacity style={[{ width: '100%', height: 50, backgroundColor: bgColor || 'white', borderRadius: 10, borderColor: borderColor || null, justifyContent: 'center', alignItems: 'center' }, style]} onPress={onPress}>
            <Text style={[{ fontSize: 18, fontWeight: '400', color: textColor || 'white' }, textStyle]}>{label || ""}</Text>
        </TouchableOpacity>
    )
}

export default Button