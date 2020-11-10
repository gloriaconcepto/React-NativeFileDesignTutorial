import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import strings from 'utilities/stringsConstants';
//import {HeaderBackButton} from '@react-navigation/stack';
import LoginScreen from '../screens/signin/LoginScreen';
import RegistrationScreen from '../screens/signup/RegistrationScreen';
import HomeScreen from '../screens/homescreen/HomeScreen';
const Stack = createStackNavigator();
// const goBack = (navigation) => {
//   console.log('i should be heading left');

//   navigation.goBack();
// };
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          //  options={{headerShown: false}}
          // options={{
          //   headerLeft: (props) => (
          //     <HeaderBackButton
          //       {...props}
          //       onPress={() => {
          //         // Do something
          //         props.navigation.goBack();
          //       }}
          //     />
          //   ),
          // }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
