import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import firebase from 'firebase'
import Login from './LogIn';


Out = () => {
    firebase.auth().signOut()
    .catch(function (err) {
      console.log(err)
    });

}
export default class SingOut extends Component {
    


    static navigationOptions = ({
        tabBarLabel: "Logout",
        tabBarIcon: () => (
            <Icon
                name={'logout'}
                size={50}
                color={'white'}
                onPress={Out}
            />
        )
    })
    

}
