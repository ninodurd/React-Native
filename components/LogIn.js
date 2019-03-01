import React from 'react';
import { Text, StyleSheet, View, Button, ScrollView } from 'react-native';
import { MKTextField,  MKColor } from 'react-native-material-kit'
import firebase from 'firebase'

 class LogIn extends React.Component {
    
    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
    };

 

    onAuthSuccess() {
        this.setState({
            email: '',
            password: "",
            error: '',
            loading: false
        })
    }
    onAuthFailed() {
        this.setState({
            error: 'Authentication failed',
            loading: false
        })
    }
    onButtonPress  () {
        const { email, password, } = this.state
        this.setState({
            error: '',
        })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onAuthSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onAuthSuccess.bind(this))
                    .catch(this.onAuthFailed.bind(this))
            })
    }
  render() {
    const { form, fieldStyles, loginButtonArea, errorMessage, welcome,container } = styles;
    return (
        <ScrollView>
        <View style={form}>
            <Text style={welcome}>LOG IN!</Text>
            <MKTextField text={this.state.email}
                onTextChange={email => this.setState({ email })}
                textInputStyle={fieldStyles}
                placeholder={'Email...'}
                tintColor={MKColor.Teal}></MKTextField>
            <MKTextField text={this.state.password}
                onTextChange={password => this.setState({ password })}
                textInputStyle={fieldStyles}
                placeholder={'Password...'}
                tintColor={MKColor.Teal}
                password={true}
            ></MKTextField>
            <Text style={errorMessage}>{this.state.error}</Text>
            <View style={loginButtonArea}>
                {/* {this.renderLoader()} */}

                <Button onPress={this.onButtonPress.bind(this)}  title='LOG IN'/>

            </View>
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Pink,
        width: 200,
    },
    loginButtonArea: {
        marginTop: 20,
    },
    errorMessage: {
        marginTop:15,
       fontSize:15,
        color: 'red',
        alignSelf: 'center',
    }
    // buttonText: {
    //     color: '#fff',
    //     fontWeight: 'bold',
    // },
});

export default LogIn;
