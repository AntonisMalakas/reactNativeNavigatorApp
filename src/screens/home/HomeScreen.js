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
        const { navigation } = this.props

        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#FFFFFF"
                    translucent={true} />

                <ScrollView style={styles.scrollView}>
                    <SliderBox
                        images={this.state.images}
                        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                        // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
                        sliderBoxHeight={200}
                        dotColor="#FFFFFF"
                        inactiveDotColor="#90A4AE"
                        autoplay
                        circleLoop
                        ImageComponentStyle={styles.sliderBox}
                    />

                    <View style={styles.sectiosnsView}>
                        <View style={{ marginBottom: 5 }}>
                            <Text style={styles.sectionText}>Category</Text>
                        </View>
                        <FlatList
                            horizontal
                            data={this.state.dataCategory}
                            renderItem={({ item, key }) => {
                                return (
                                    <View key={key} style={styles.categoryFlatListView}>
                                        <Button style={styles.categoryFlatListButton} onPress={() =>
                                            navigation.navigate('Category')}>
                                            <Text style={styles.categoryFlatLisText}>{item.categories.name}</Text>
                                        </Button>
                                    </View>
                                )
                            }} />
                    </View>
                    <View style={styles.sectiosnsView}>
                        <View style={{ marginBottom: 5 }}>
                            <Text style={styles.sectionText}>Top Restaurant</Text>
                        </View>
                        <FlatList
                            horizontal
                            data={this.state.dataRestaurant}
                            renderItem={({ item, key }) => {
                                return (
                                    <Card key={key} style={styles.flatListCard}>
                                        <CardItem style={styles.cardItemHeader}>
                                            <Text style={styles.cardItemTitle}>{item.restaurant.name}</Text>
                                        </CardItem>
                                        <CardItem cardBody style={styles.cardItemBody}>
                                            <Image style={styles.cardItemBodyImage}
                                                source={item.restaurant.thumb ? { uri: item.restaurant.thumb } : null} />
                                        </CardItem>
                                        <CardItem style={styles.cardItemFooter}>
                                            <Left>
                                                <Icon name='star' style={styles.cardItemFooterLeftIcon} />
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


