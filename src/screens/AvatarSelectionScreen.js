// src/screens/AvatarSelection.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import typography from '../utils/typography';

// Import avatar images
import avatar1 from '../assets/images/avatar1.png';
import avatar2 from '../assets/images/avatar2.png';
import { COLORS } from '../utils/constants/color-style';
// ... import the rest of the avatars


const AvatarSelectionScreen = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarPress = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleConfirmAvatar = () => {
    // Implement the logic for confirming the selected avatar
    console.log('Selected avatar:', selectedAvatar);
  };

  // Render a single avatar as a TouchableOpacity
  const renderAvatar = (avatar, index) => (
    <TouchableOpacity key={index} onPress={() => handleAvatarPress(avatar)}>
      <Image
        source={avatar}
        style={[
          styles.avatar,
          selectedAvatar === avatar ? styles.selectedAvatar : {},
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={[typography.header, styles.header]}>Select Your Avatar</Text>
      <View style={styles.avatarsContainer}>
        {renderAvatar(avatar1, 1)}
        {renderAvatar(avatar2, 2)}
        {/* Render the rest of the avatars */}
      </View>
      <CustomInput
        
      />
      <CustomButton
        title="Confirm Avatar"
        onPress={handleConfirmAvatar}
        style={styles.confirmButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 24,
    marginBottom: 16,
    textAlign: 'center',
    color:COLORS.white
  },
  avatarsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  avatar: {
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 8,
  },
  selectedAvatar: {
    borderWidth: 3,
    borderColor: COLORS.white,
  },
  confirmButton: {
    marginTop: 24,
    color:COLORS.red
  },
});

export default AvatarSelectionScreen;
