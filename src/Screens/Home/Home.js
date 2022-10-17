
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,TextInput,TouchableOpacity} from 'react-native';
import styles from './Styles';
styles.headerStyle


// create a component
class Home extends Component {
  constructor()
  {
    super();
    this.state={
      name:'',
      password:"",
      Email:'',

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
        <View style={{borderBottomcolor:'black',borderBottomWidth:10}}>

        </View>
        
      
      
      <View style={{flex:1,marginTop:'60%',marginHorizontal:24}}>
    <TextInput style={{backgroundColor:'grey',height:48,padding:16,borderRadius:8,fontSize:22}}
    placeholder ='Enter Email'
  placeholderTextColor='white'
  />

    <TextInput style={{backgroundColor:'blue',height:48,padding:16,borderRadius:8,marginTop:16,fontSize:22}}
    placeholder ='Enter Name'
  placeholderTextColor='green'

  />


    <TextInput style={{backgroundColor:"yellow",height:48,padding:16,borderRadius:8,marginTop:16,fontSize:22}}
    placeholder='Enter password'
  
  />
    <View style={{flex:1,justifyContent:'flex-end',marginBottom:40}}>
  <TouchableOpacity onPress={()=>alert('welcome')}
  style={{backgroundColor:'green',width:'100%',height:48,justifyContent:'center',alignItems:'center',marginTop:16,borderRadius:8}}>


  <Text style={{color:'white',alignself:'center',fontSize:22,}}>Sign in</Text>
  </TouchableOpacity>
  
   </View>
      </View>
      </View>
  
    )
  }
}

    export default Home
  





