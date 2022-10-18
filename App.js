//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from './src/Screens/Home/Home';
import Login from './src/Screens/Login/Login';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       {/* <Home/> */}
       <Login/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;
