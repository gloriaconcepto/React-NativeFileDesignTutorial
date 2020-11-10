import React, {useState} from 'react';
import strings from 'utilities/stringsConstants';
import images from 'utilities/imagesConstants';
import CustomiseButton from 'utilities/CustomiseButton';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userPassword, setPassword] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [userError, setUserError] = useState(null);

  const submit = () => {
    console.log('am submitting data');
    //checking navigating to home screen..
    navigation.navigate(strings.homeScreen.pageName);
  };
  const onBlur = () => {
    console.log('hey am on blur mode');
    //check if anyerror message is display
    if (userError !== null) {
      setDisabled(true);
    } else if (userPassword === null || userName === null) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  const onChange = (value, fieldName) => {
    if (fieldName === 'user') {
      // check the length
      if (value.length < 2) {
        //error text
        setUserError('Minimum of three characters.');
      } else {
        setUserName(value);
        setUserError(null);
      }

      //\\//\\
    }
    if (fieldName === 'password') {
      setPassword(value);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor="#0A2331" />
      <Image style={styles.logo} source={images.signIn} />

      <TextInput
        style={styles.inputText}
        // nativeID={'me'}
        placeholder={'e.g mmk'}
        //  underlineColorAndroid={'#d2691e'}
        onChangeText={(text) => onChange(text, 'user')}
        onBlur={() => onBlur()}
        value={userName}
      />
      <Text style={styles.errorText}>{userError ? userError : null}</Text>
      <TextInput
        style={styles.inputText}
        placeholder={'password'}
        secureTextEntry={true}
        //  underlineColorAndroid={'#d2691e'}
        onChangeText={(text) => onChange(text, 'password')}
        value={userPassword}
        onBlur={() => onBlur()}
      />
      {/* <TextInput
       
        style={{
          height: 40,
          width: 200,
          borderColor: 'white',
          borderWidth: 1,
         
        }}
        mode="outlined"
        //onChangeText={(text) => this.setState({text})}
        inlineImageLeft="username"
        inlineImagePadding={2}
        underlineColorAndroid="transparent"
        //value={this.state.text}
      /> */}
      <CustomiseButton
        onPress={submit}
        title={strings.onboarding.login.text1}
        disabled={disabled}
      />
      {/* <Text style={styles.text}>{strings.onboarding.login.text1}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 50,
    flex: 1,
    //backgroundColor: '#0A2331',
    backgroundColor: '#145084',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    // textAlign: 'center',
    // fontWeight: 'bold',
    color: 'red',
    fontStyle: 'italic',
    fontSize: 10,
    //margin: 10,
    paddingTop: 30,
    paddingRight: 100,
    position: 'absolute',
    //color: '#fff',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    margin: 10,
    color: '#fff',
  },
  logo: {
    bottom: 100,
    //position:'absolute'
  },
  inputText: {
    //textAlign:'center',
    bottom: 50,
    height: 40,
    width: 250,
    borderBottomColor: '#FF4500',
    borderBottomWidth: 1,
    marginBottom: 20,
    fontStyle: 'italic',
  },
});

export default LoginScreen;
