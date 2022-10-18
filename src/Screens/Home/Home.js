
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import imagePath from "../../constants/imagePath"
import styles from './Styles';
// create a component
class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: "",
            Email: '',

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textInputHome}>
                    <Text style={styles.headerStyle}>BACK</Text>
                    <Text style={styles.headerStyle}>HOME</Text>
                    <Text style={styles.headerStyle}>OK</Text>

                    </View>
                <View style={{ borderBottomcolor: 'black', borderBottomWidth: 10 }}>
                </View>
                <View style={styles.ImageView}>
                <Image style={styles.ImageStyle} source={imagePath.logo} /> 
                </View>
                
                <View style={styles.TextViewStyle}>
                    <TextInput style={styles.TextInputStyle}
                        placeholder='Enter Email'
                        placeholderTextColor='white'
                    />
                    <TextInput style={styles.TextInput2}
                        placeholder='Enter Name'
                        placeholderTextColor='green'
                    />
                    <TextInput style={styles.TextInput3}
                        placeholder='Enter password'

                    />
                    <View style={styles.ViewBUtton}>
                        <TouchableOpacity onPress={() => alert('welcome')}
                            style={styles.Button}>
                            <Text style={styles.ButtonText}>Sign in</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            

        )
    }
}

export default Home






