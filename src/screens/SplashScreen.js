// SplashScreen.js
import React, { useEffect } from 'react';
import { TEXT_STYLES } from '../utils/constants/text-style';
import { COLORS } from '../utils/constants/color-style';

import { View, Text, StyleSheet,Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WelcomeAbroad');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
        <Text style={TEXT_STYLES.title}>MGG</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:COLORS.black
  }
});

export default SplashScreen;
