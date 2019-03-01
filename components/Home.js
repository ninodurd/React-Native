import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase'
import Loader from './Loader'
import LogIn from './LogIn'


class Home extends React.Component {
    state = {
      loggedIn:null,
    }
  
    componentWillMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyDEZZfxzg6tjFs3JcuDBpVxpdBpYYds20g",
        authDomain: "crm2-573a9.firebaseapp.com",
        databaseURL: "https://crm2-573a9.firebaseio.com",
        projectId: "crm2-573a9",
        storageBucket: "crm2-573a9.appspot.com",
        messagingSenderId: "156543716581"
      })
     
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
         
          this.setState({ loggedIn: true })
          
        } else {
         
          this.setState({ loggedIn: false })
          
        }
      })
    }
  
    renderInitialView() {
      switch (this.state.loggedIn) {
        case true:
          return this.props.navigation.navigate('Main')
        case false:
          return this.props.navigation.navigate('LogIn')
        default:
       
          return <Loader />
      }
    }
  
    render() {
      return (
        <View style={styles.container}>
          {this.renderInitialView()}
        </View>
      )
    }
  
  }
export default Home
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });