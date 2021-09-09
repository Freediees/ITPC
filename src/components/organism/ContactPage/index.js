import React from 'react'
import { View, Text, Image } from 'react-native'
import Header from 'Atom/header'
import { Icon } from 'native-base'


const ContactPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1}}>
             <Header title={"Contact Us"} onBackPress={() => { navigation.pop() }} />
             <View style={{ width: '100%', minHeight: 250 }}>
                 <Image source={require('Assets/images/contactUs.png')} style={{ width: '100%', flex: 1 }} resizeMode={'cover'} />
             </View>
             <View style={{ padding: 20}}>
                <View style={{ flexDirection:'row', marginTop: 5 }}>
                    <Icon type="Ionicons" name="location-outline" style={{ fontSize: 20, marginRight: 10 }}/>
                    <Text>Calle Aribau 250 Bj.08006, Barcelona, Spain</Text>
                </View>
                <View style={{ flexDirection:'row', marginTop: 20 }}>
                    <Icon type="Ionicons" name="call-outline" style={{ fontSize: 20, marginRight: 10 }}/>
                    <Text>+34 934 144 662</Text>
                </View>
                <View style={{ flexDirection:'row', marginTop: 20 }}>
                    <Icon type="FontAwesome" name="fax" style={{ fontSize: 20, marginRight: 10 }}/>
                    <Text>+34 934 146 188</Text>
                </View>
                <View style={{ flexDirection:'row', marginTop: 20 }}>
                    <Icon type="Ionicons" name="mail-outline" style={{ fontSize: 20, marginRight: 10 }}/>
                    <Text>info@itpc-barcelona.es</Text>
                </View>
                <View style={{ flexDirection:'row', marginTop: 20 }}>
                    <Icon type="FontAwesome" name="globe" style={{ fontSize: 20, marginRight: 10 }}/>
                    <Text>http://www.itpc-barcelona.es</Text>
                </View>
             </View>
           
        </View>
    )
}

export default ContactPage