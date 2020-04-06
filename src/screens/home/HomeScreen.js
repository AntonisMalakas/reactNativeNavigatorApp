import React, { Component } from 'react';
import { Text, StyleSheet, View, StatusBar, ScrollView, FlatList, Image } from 'react-native';
import { Card, CardItem, Icon, Left, Right, Button } from 'native-base';
import { SliderBox } from 'react-native-image-slider-box';
import axios from 'axios';

// import Footer from '../../components/Footer/Footer'

// styles
import styles from './HomeScreenStyle';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://www.luxxu.net/blog/wp-content/uploads/2018/10/These-Are-The-Best-Restaurants-in-Moscow-01-850x410.jpg",
                "https://www.meininger-hotels.com/blog/wp-content/uploads/2019/07/Pink-Mamma02-1050x700.jpg",
                "https://media.cntraveler.com/photos/5b917d515cd9e63755f74a87/master/pass/Horva%CC%81th_11_2018@whitekitchen.jpg",
                "https://www.elitetraveler.com/wp-content/uploads/2012/12/Dining-With-A-View-At-Main-Tower-Restaurant-462x346.jpg",
            ],
            dataCategory: [],
            dataRestaurant: [],
        }
    }

    getDataCategory = () => {
        axios.get('https://developers.zomato.com/api/v2.1/categories', {
            headers: {
                'user-key': 'e86000da9fe3866cc44f17af05fba07f'
            }
        }).then(response => {
            // console.log(response.data.categories, 'oke');
            this.setState({
                dataCategory: response.data.categories
            })
        }).catch(err => console.log('Errorrr', err))
    }

    getDataRestaurant = () => {
        axios.get('https://developers.zomato.com/api/v2.1/search?start=6&count=10&sort=rating', {
            headers: {
                'user-key': 'e86000da9fe3866cc44f17af05fba07f'
            }
        }).then(response => {
            // console.log(response.data.restaurants, 'oke');
            this.setState({
                dataRestaurant: response.data.restaurants
            })
        }).catch(err => console.log('Errorrr', err))
    }

    componentDidMount() {
        this.getDataCategory();
        this.getDataRestaurant();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#FFFFFF"
                    translucent={true} />

                <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF', marginTop: 25 }}>
                    <SliderBox
                        images={this.state.images}
                        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                        // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
                        sliderBoxHeight={200}
                        dotColor="#FFFFFF"
                        inactiveDotColor="#90A4AE"
                        autoplay
                        circleLoop
                        ImageComponentStyle={{ width: '97%', borderRadius: 10, marginTop: 5, borderWidth: 1, borderColor: '#FFFFFF' }}
                    />

                    <View style={{ marginTop: 15, paddingHorizontal: 10 }}>
                        <View style={{ marginBottom: 5 }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Category</Text>
                        </View>
                        <FlatList
                            horizontal
                            data={this.state.dataCategory}
                            renderItem={({ item, key }) => {
                                return (
                                    <View key={key} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Button style={{ backgroundColor: '#F67882', shadowRadius: 8, shadowColor: 'black', borderRadius: 5, marginRight: 17, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ textAlign: 'center', color: '#FFFFFF', marginHorizontal: 10, fontWeight: '900' }}>{item.categories.name}</Text>
                                        </Button>
                                    </View>
                                )
                            }} />
                    </View>
                    <View style={{ marginTop: 15, paddingHorizontal: 10 }}>
                        <View style={{ marginBottom: 5 }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Top Restaurant</Text>
                        </View>
                        <FlatList
                            horizontal
                            data={this.state.dataRestaurant}
                            renderItem={({ item, key }) => {
                                return (
                                    <Card key={key} style={{ height: 200, width: 200, borderRadius: 15, marginRight: 10, flex: 1 }}>
                                        <CardItem style={{ flex: 1 }}>
                                            <Text style={{ fontWeight: 'bold' }}>{item.restaurant.name}</Text>
                                        </CardItem>
                                        <CardItem cardBody style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image style={{ height: '100%', width: 200, borderRadius: 5, backgroundColor: 'yellow' }}
                                                source={item.restaurant.thumb ? { uri: item.restaurant.thumb } : null} />
                                        </CardItem>
                                        <CardItem style={{ flex: 1 }}>
                                            <Left>
                                                <Icon name='star' style={{ marginRight: 5, fontSize: 22, color: 'red' }} />
                                                <Text>{item.restaurant.user_rating.aggregate_rating}</Text>
                                            </Left>
                                            <Right>
                                                <Text style={{}}>{item.restaurant.user_rating.rating_text}</Text>
                                            </Right>
                                        </CardItem>
                                    </Card>
                                )
                            }} />
                    </View>

                </ScrollView>

            </View>
        )
    }
}


