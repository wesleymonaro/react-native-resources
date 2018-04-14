import React, { Component } from 'react'
import { View, Button, Text } from 'react-native';
import * as firebase from 'firebase';

export default class FirebaseDB extends Component {

  sendData() {
    let data = { 'name': 'Wesley' }

    firebase.database().ref('teste')
      .push(data)
      .then((teste) => {
        console.log(teste.key);
      })
  }


  render() {
    return (
      <Button onPress={() => this.sendData()} title="Send Data to Firebase" />
    )
  }
}