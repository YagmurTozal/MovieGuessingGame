// src/components/CustomInput.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../utils/constants/color-style';

const CustomInput = ({ placeholder, onChangeText, value, style }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    color: COLORS.white,
  },
});

export default CustomInput;
