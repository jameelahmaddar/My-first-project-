//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

// create a component
 const Login = () => {
    const [apple, boy]=useState('mango')
    return (
        <View style={styles.container}>
            <Text>{apple}</Text>
       
            <Button title='click me' onPress={()=>boy("banana")}/>

            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});

//make this component available to the app
export default Login;
