import React from 'react'
import { View, Text, Image, ScrollView, Dimensions } from 'react-native'
import Header from 'Atom/header'
import Skeleton from 'react-native-skeleton-placeholder'
import WebView from 'react-native-autoheight-webview'

const NewsDetailPage = ({ navigation, isLoading, data }) => {
    console.log('data', data)
    return (
        <View style={{ flex: 1 }}>
            <Header title="ITPC Barcelona" />
            <ScrollView>
                {
                    isLoading && !data
                        ? <Skeleton>
                            <View style={{ height: 200, width: '100%' }}></View>
                        </Skeleton>
                        : <View style={{ flex: 1 }}>
                            <View style={{ width: '100%', height: 400 }}>
                                <Image style={{ width: '100%', height: 400 }} resizeMode="cover" source={{ uri: data?.news_thumbnail }} />
                                <View style={{ width: '100%', height: 100, position: 'absolute', bottom: 0, backgroundColor: 'rgba(0,0,0,0.2)', padding: 16 }}>
                                    <Text style={{ fontSize: 14, color: 'white' }}>{data?.news_title}</Text>
                                </View>

                            </View>
                            <WebView
                                style={{ width: '95%', margin: 16 }}
                                originWhitelist={['*']}
                                useWebKit={true}
                                automaticallyAdjustContentInsets={false}
                                source={{ html: `<meta name="viewport" content="width=device-width, initial-scale=1.0"></head><p style=\"margin-left: 25px;\">${data?.news_content || ''}` }}
                            />
                        </View>
                }
            </ScrollView>
        </View>
    )
}

export default NewsDetailPage