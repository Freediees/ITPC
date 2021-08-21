import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../atom/button'

import { Colors } from '../../../theme'

const AccountPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black', padding: 25 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: '20%' }}>
                Login
            </Text>
            <Text style={{ fontSize: 12, color: 'white', marginVertical: 20 }}>
                {"Sign in to your account \nDidn't have an account? Register here"}
            </Text>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Button label="Login" bgColor={Colors.blue} style={{ margin: 10 }} onPress={() => { navigation.push('LoginScreen') }} />
                <Button label="Register" bgColor={Colors.white} textColor={Colors.blue} borderColor={Colors.blue} />
            </View>
        </View>
    )
}

export default AccountPage