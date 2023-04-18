// AvatarSelectionScreen.js
import React, { useState } from 'react';
import { COLORS } from '../utils/constants/color-style';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const avatars = [
  // Import your avatar images here
];

const AvatarSelectionScreen = () => {
  const [nickname, setNickname] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarPress = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleContinue = () => {
    // Navigate to the next screen with the selected avatar and nickname
  };

  return (
    <View style={styles.container}>
      {/* Render avatars and handle avatar selection */}
      <Image style={styles.image} source={require('../assets/images/aboutyou.png')} />
      <Image style={styles.image} source={require('../assets/images/enteranickname.png')} />
      
      {/* Render the nickname input */}
      {/* Render the continue button */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default AvatarSelectionScreen;
