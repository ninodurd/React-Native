import React, { Component } from 'react';
import { View,  ActivityIndicator } from 'react-native';

export default class Loader extends Component {
  render() {
    return (
      <View>
        <ActivityIndicator /> 
      </View>
    );
  }
}

