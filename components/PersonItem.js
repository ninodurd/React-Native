import React, { Component } from 'react';
import { View, Text,StyleSheet, Image,TouchableWithoutFeedback } from 'react-native';
import { connect } from "react-redux"
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions'


const theme = getTheme();

const  PersonItem = (props) => {
 return(
    <TouchableWithoutFeedback
    onPress={()=> props.selectPerson(props.people)}
    >
     <View style={[theme.cardStyle, styles.card]}>
         <Image source={{uri: 'https://cdn.pixabay.com/photo/2019/02/04/20/07/flowers-3975556_960_720.jpg'}}  style={[theme.cardImageStyle, styles.image]}/>
         <Icon  name={'user'} size={100}  style={styles.icon}/>
         <Text style={[theme.cardTitleStyle, styles.title]}> {props.people.first_name} {props.people.last_name}</Text>
         <Text style={[theme.cardActionStyle, styles.action]}>{props.people.company}</Text>
   
     </View>
     </TouchableWithoutFeedback>
 )
}



const styles = StyleSheet.create({
    card:{
        marginTop:20,
    },
    title: {
        top:20,
        left:80,
        fontSize:24,
    },
    image:{
        height: 100,
        width:'100%'
    },
    action:{
        backgroundColor:"black",
        color:'white',
        marginTop:0
    },
    icon:{
        position:'absolute',
        top:15,
        left:0,
        color:'white',
        backgroundColor:'rrgba(255,255,255,0)',

    }
})
export default connect(null,actions)(PersonItem)