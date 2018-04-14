import React, { Component } from 'react'
import { View, Button, Text, Image, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'react-native-fetch-blob'

// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

const uploadImage = (uri, mime = 'image/jpeg') => {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    const sessionId = new Date().getTime()
    let uploadBlob = null
    const imageRef = storage.ref('images').child(`${sessionId}`)

    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        resolve(url)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

var storage;

export default class FirebaseStorage extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    storage = firebase.storage();
  }


  _pickImage() {
    this.setState({ uploadURL: '' })

    ImagePicker.launchImageLibrary({}, response => {
      uploadImage(response.uri)
        .then(url => this.setState({ uploadURL: url }))
        .catch(error => console.log(error))
    })
  }

  render() {
    const styles = StyleSheet.create({
      image: {
        height: 200,
        resizeMode: 'contain',
      }
    })

    return (
      <View style={{ flex: 1 }}>
        {
          (() => {
            switch (this.state.uploadURL) {
              case null:
                return null
              case '':
                return <ActivityIndicator />
              default:
                return (
                  <View>
                    <Image
                      source={{ uri: this.state.uploadURL }}
                      style={styles.image}
                    />
                    <Text>{this.state.uploadURL}</Text>
                  </View>
                )
            }
          })()
        }

        <Button onPress={() => this._pickImage()} title="Upload" />
      </View>
    )
  }
}