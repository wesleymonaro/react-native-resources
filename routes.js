import { StackNavigator } from 'react-navigation'

import Home from './src/screens/home'
import FirebaseDB from './src/screens/firebase-db'
import FirebaseStorage from './src/screens/firebase-storage'
import GooglePlaces from './src/screens/google-places'
import Icons from './src/screens/icons'

export default StackNavigator({
    Home: {
        screen: Home,
    },
    FirebaseDB: {
        screen: FirebaseDB
    },
    FirebaseStorage: {
        screen: FirebaseStorage
    },
    GooglePlaces: {
        screen: GooglePlaces
    },
    Icons: {
        screen: Icons
    }
});
