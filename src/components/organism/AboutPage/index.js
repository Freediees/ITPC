import React from 'react'
import { View, Text } from 'react-native'
import Header from 'Atom/header'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import WebView from 'react-native-autoheight-webview'

const About = ({ navigation, data, isLoading }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header title={"About Us"} onBackPress={() => { navigation.pop() }} />
            {
                isLoading && !data
                    ? <SkeletonPlaceholder>
                        <View style={{ height: 200, width: '100%' }}>

                        </View>
                    </SkeletonPlaceholder>
                    : <View style={{ flex: 1 }}>
                        <WebView
                            style={{ width: '95%', alignSelf: 'center' }}
                            originWhitelist={['*']}
                            useWebKit={true}
                            automaticallyAdjustContentInsets={false}
                            source={{ html: `<meta name="viewport" content="width=device-width, initial-scale=1.0"></head><p style=\"margin-left: 0px;\">${data || ''}` }}
                        />
                    </View>

            }
        </View>
    )
}

export default About