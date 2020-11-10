import React, {useLayoutEffect} from 'react';
import {HeaderBackButton} from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Button,
} from 'react-native';
const HomeScreen = ({navigation}) => {
  const previous = () => {
    navigation.goBack();
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderBackButton onPress={previous} title="back" />,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor="#0A2331" />

      <Text style={styles.text}>Welcome to home flex to be applied</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 50,
    flex: 1,
    backgroundColor: '#6eafe8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    margin: 10,
    color: '#fff',
  },
});
export default HomeScreen;
