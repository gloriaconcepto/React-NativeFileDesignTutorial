import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';

  const RegistrationScreen=({navigate})=>{
    const [userName, setUserName] = useState(null);
    const [userPassword,setPassword]=useState(null);
    return(
        <View style={styles.container}>
        <StatusBar hidden={false} backgroundColor="#0A2331" />
        <Text style={styles.text}>Registration</Text>
        
      </View>   
    )


  }


  const styles = StyleSheet.create({
    container: {
      // height: 50,
      flex: 1,
      backgroundColor: '#0A2331',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      textAlign: 'center',
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: 10,
    }
  });

  export default RegistrationScreen;