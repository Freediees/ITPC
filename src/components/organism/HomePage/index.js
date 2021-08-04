import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, Dimensions, StyleSheet, Linking } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import Header from 'Atom/header'
import { Colors } from 'Theme'
import Button from 'Atom/button'
import { CFonts } from 'Assets/FontConstant'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const slides = [
    {
        key: 'one',
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: require('Assets/images/asset1.jpg'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 'two',
        title: 'Title 2',
        text: 'Other cool stuff',
        image: require('Assets/images/asset2.jpg'),
        backgroundColor: '#febe29',
    },
    {
        key: 'three',
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('Assets/images/asset3.jpg'),
        backgroundColor: '#22bcb5',
    }
]

const HomePage = ({ isLoading, data, navigation }) => {

    const [activeSlide, setActiveSlide] = useState(0)

    const onPressButton = (id) => {
        navigation.navigate('NewsDetailScreen', { id: id })
    }

    const _renderItem = ({ item, index }) => {
        return (
            <View style={{ width: width }}>
                <Image source={{ uri: item.thumbnail }} style={{ width: width, height: 200 }} resizeMode={'cover'} />
                <View style={{ width: '100%', height: 150, backgroundColor: Colors.blue, padding: 16 }}>
                    <Text style={{ color: 'white', fontSize: 16, height: 70 }} numberOfLines={3}>{item.title}</Text>
                    <Button label={'See more'} style={{ width: 100, backgroundColor: Colors.secondary, flex: 1 }} textStyle={{ fontSize: 14 }} onPress={() => { onPressButton(item.id) }} />
                </View>
            </View>
        )
    }

    const getPagination = () => {
        return (
            <Pagination
                dotsLength={data?.news_latest?.length}
                activeDotIndex={activeSlide}
                containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)', marginTop: 5 }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 4,
                    backgroundColor: 'red'
                }}
                inactiveDotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="ITPC Barcelona" />
            {
                isLoading && !data
                    ? <SkeletonPlaceholder>
                        <View style={{ width: '100%', height: 200 }}>
                            {/* <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                            <View style={{ marginLeft: 20 }}>
                                <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                                <View
                                    style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                                />
                            </View> */}
                        </View>
                    </SkeletonPlaceholder>
                    : <ScrollView
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{ width: '100%' }}>
                            {
                                data ?
                                    <View>
                                        <Carousel
                                            data={data?.news_latest}
                                            sliderWidth={width}
                                            itemWidth={width}
                                            renderItem={_renderItem}
                                            layout={"default"}
                                            containerCustomStyle={{ overflow: 'visible' }}
                                            contentContainerCustomStyle={{ overflow: 'visible' }}
                                            inactiveSlideScale={1}
                                            activeSlideAlignment={'center'}
                                            enableSnap={true}
                                            onSnapToItem={(index) => {
                                                setActiveSlide(index)
                                            }}
                                        />
                                        <View style={{ position: 'absolute', top: 130, alignItems: 'center', width: '100%' }}>
                                            {getPagination()}
                                        </View>
                                    </View>
                                    : null

                            }
                        </View>
                        <View>
                            <View style={{ padding: 16 }}>
                                <Text style={{ fontSize: 16, fontFamily: CFonts.bold }}>Featured</Text>
                                <Text style={{ fontSize: 14, fontFamily: CFonts.regular }}>Featured Indonesian Exporter</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <ScrollView horizontal={true} style={{ paddingLeft: 20, paddingRight: 200 }} showsHorizontalScrollIndicator={false}>
                                    {
                                        data?.exporter_home.map((item) => {
                                            return (
                                                <View style={styles.shadowCard}>
                                                    <Image source={{ uri: item.logo }} style={{ width: 100, height: 100 }} resizeMode="contain" />
                                                </View>
                                            )
                                        })
                                    }
                                    <View style={{ marginRight: 20 }} />
                                </ScrollView>
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <View style={{ padding: 16 }}>
                                <Text style={{ fontSize: 16, fontFamily: CFonts.bold }}>Indonesian Product</Text>
                                <Text style={{ fontSize: 14, fontFamily: CFonts.regular }}>Featured Indonesian Exporter</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <ScrollView horizontal={true} style={{ paddingLeft: 20, paddingRight: 200 }} showsHorizontalScrollIndicator={false}>
                                    {
                                        data?.indonesia_product.map((item) => {
                                            return (
                                                <TouchableOpacity style={[styles.shadowCard, { width: 140, height: 140 }]} onPress={() => { Linking.openURL(item.file) }}>
                                                    <Image source={{ uri: item.thumbnail }} style={{ width: 140, height: 140 }} resizeMode="cover" />
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                    <View style={{ marginRight: 20 }} />
                                </ScrollView>
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <View style={{ padding: 16 }}>
                                <Text style={{ fontSize: 16, fontFamily: CFonts.bold }}>Discover</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '100%', height: 60, paddingHorizontal: 10 }}>
                                <View style={{ flex: 1, margin: 5, backgroundColor: Colors.lightGrey, borderRadius: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                    <Icon type="Ionicons" name="briefcase-outline" size={50} style={{ color: Colors.blue, marginRight: 10 }} />
                                    <Text>About Us</Text>
                                </View>
                                <View style={{ flex: 1, margin: 5, backgroundColor: Colors.lightGrey, borderRadius: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                    <Icon type="Ionicons" name="download-outline" size={50} style={{ color: Colors.blue, marginRight: 10 }} />
                                    <Text>Contact Us</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 20, marginBottom: 50 }}>
                            <View style={{ padding: 16 }}>
                                <Text style={{ fontSize: 16, fontFamily: CFonts.bold }}>Useful Link</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <ScrollView horizontal={true} style={{ paddingLeft: 20, paddingRight: 200 }} showsHorizontalScrollIndicator={false}>
                                    {
                                        data?.useful_link.map((item) => {
                                            return (
                                                <TouchableOpacity style={[styles.shadowCard, { height: 80, width: 80 }]} onPress={() => { Linking.openURL(item.link) }}>
                                                    <Image source={{ uri: item.logo }} style={{ width: 80, height: 80 }} resizeMode="contain" />
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                    <View style={{ marginRight: 20 }} />
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    shadowCard: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 15,
        //marginBottom: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    }
})

export default HomePage