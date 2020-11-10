/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Routes from './navigation/Routes';
const App = () => {
  return (
    // <View style={styles.container}>
    //   <StatusBar hidden={false} backgroundColor="#0A2331" />
    //   <Text style={styles.text}>WELCOME TO MY WORLD3 </Text>

    // </View>
    <Routes />
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 50,
    flex: 1,
    backgroundColor: '#0A2331',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  },
});

export default App;
