import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import AppNavigator from './src/navigation/AppNavigator';

class App extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}

export default App

const styles = StyleSheet.create({})