import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const CustomiseButton = ({onPress, title, styles, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={disabled ? 0.5 : 0.7}
      style={styles ? styles.button : disabled ? customiseStyle.disabledButton:customiseStyle.button}>
      <Text style={styles ? styles.buttonText : customiseStyle.text}>
        {title ? title : null}
      </Text>
    </TouchableOpacity>
  );
};

const customiseStyle = StyleSheet.create({
  button: {
    elevation: 8,
    // backgroundColor: '#009688',
    backgroundColor: '#FF4500',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
   // opacity: 0.3,
  },
  disabledButton:{
    backgroundColor: '#FF4500',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    opacity: 0.3,
  },
  text: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default CustomiseButton;
