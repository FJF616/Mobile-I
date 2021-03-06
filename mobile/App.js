import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, ImageContainer, ButtonsWrapper, Comments } from './components';

export default class App extends React.Component {
  render() {
    return (
      <View style={container}>
        <Header />
        <ImageContainer />
        <ButtonsWrapper />
        <Comments />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const { container } = styles;