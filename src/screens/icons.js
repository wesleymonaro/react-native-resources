import React, { Component } from 'react'
import { View, Button, Text } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import EntypoGlyphs from 'react-native-vector-icons/glyphmaps/Entypo';
import EvilIconsGlyphs from 'react-native-vector-icons/glyphmaps/EvilIcons';
import FeatherGlyphs from 'react-native-vector-icons/glyphmaps/Feather';
import FontAwesomeGlyphs from 'react-native-vector-icons/glyphmaps/FontAwesome';
import FoundationGlyphs from 'react-native-vector-icons/glyphmaps/Foundation';
import IoniconsGlyphs from 'react-native-vector-icons/glyphmaps/Ionicons';
import MaterialIconsGlyphs from 'react-native-vector-icons/glyphmaps/MaterialIcons';
import MaterialCommunityIconsGlyphs from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons';
import OcticonsGlyphs from 'react-native-vector-icons/glyphmaps/Octicons';
import ZocialGlyphs from 'react-native-vector-icons/glyphmaps/Zocial';

export default class Icons extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Entypo name="500px" size={30} color="#4F8EF7" />
        <Ionicons name="ios-person" size={30} color="#4F8EF7" />
      </View> 
    )
  }
}