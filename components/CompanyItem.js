import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';




const theme = getTheme();

const CompanyItem = (props) => {
    return (

        <View>
            <View style={[theme.cardStyle, styles.card]}>
                <Image source={{ uri: 'https://cdn.pixabay.com/photo/2019/02/04/20/07/flowers-3975556_960_720.jpg' }} style={[theme.cardImageStyle, styles.image]} />
                <Icon name={'business'} size={60} style={styles.icon} />
                <Text style={[theme.cardTitleStyle, styles.title]}> {props.companies.company}</Text>
                {props.companies.names.map((name) => {
                    return (
                        <Text key={name.uid} style={[theme.cardActionStyle, styles.action]}>
                            {name.first_name} {name.last_name} - Project: {name.project}
                        </Text>
                    )
                })}
            </View>
        </View>

    )
}



const styles = StyleSheet.create({
    card: {
        marginTop: 20,
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 26,
    },
    image: {
        height: 100,
        width: '100%'
    },
    action: {
        backgroundColor: "black",
        color: 'white',
        marginTop: 0,
        paddingBottom: 5,
        paddingTop: 5,
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rrgba(255,255,255,0)',

    }
})

export default CompanyItem;
