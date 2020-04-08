import React, { Component } from 'react'
import { Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoryScreen from '../screens/category/CategoryScreen';



const Stack = createStackNavigator();


class CategoryNavigator extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Category">

                <Stack.Screen name="Category" component={CategoryScreen} />
            </Stack.Navigator>
        )
    }
}

export default CategoryNavigator

