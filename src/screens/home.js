import React, { Component } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

export default class Home extends Component {

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyDCrhmqCLM9rycdMTHqvNMxIx4Dsbq022k",
      authDomain: "testes-e9e6c.firebaseapp.com",
      databaseURL: "https://testes-e9e6c.firebaseio.com",
      projectId: "testes-e9e6c",
      storageBucket: "testes-e9e6c.appspot.com",
      messagingSenderId: "225341653708"
    };
    firebase.initializeApp(config);
  }

  render() {
    const styles = StyleSheet.create({
      button: {
        marginTop: 10
      }
    })
    return (
      <View style={{ flex: 1, alignContent: 'center', alignItems: 'center' }}>
        <Button style={styles.button} onPress={() => this.props.navigation.navigate('FirebaseDB')} title="Firebase DB"></Button>
        <Button style={styles.button} onPress={() => this.props.navigation.navigate('FirebaseStorage')} title="Firebase Storage"></Button>
        <Button style={styles.button} onPress={() => this.props.navigation.navigate('GooglePlaces')} title="Google Places"></Button>
      </View>
    )
  }
}