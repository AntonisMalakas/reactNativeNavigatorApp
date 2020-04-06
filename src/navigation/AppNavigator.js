import React, { Component } from 'react'
import { Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/HomeScreen';
import CategoryScreen from '../screens/category/CategoryScreen';



const Stack = createStackNavigator();


class AppNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" headerMode="none">

                    <Stack.Screen name="Home" component={HomeScreen}
                        // options={({ navigation, route }) => ({
                        //     headerRight: () => (
                        //         <Button
                        //             onPress={() => navigation.navigate('CategoryScreen')}
                        //             title="CategoryScreen"
                        //             color="black"
                        //         />
                        //     )
                        // })}
                    />
                    <Stack.Screen name="Category" component={CategoryScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default AppNavigator

