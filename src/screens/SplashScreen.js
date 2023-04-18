// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Animated } from 'react-native';
import { startTransition } from 'react/cjs/react.production.min';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AvatarSelection');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>MGG</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 55,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
