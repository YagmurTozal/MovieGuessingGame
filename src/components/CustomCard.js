// src/components/CustomCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import COLORS from '../utils/constants/color-style';
import typography from '../utils/typography';

const CustomCard = ({ title, imageSource }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <Text style={[typography.body, styles.title]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.lightblue,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.secondary,
    padding: 12,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 8,
    color: colors.text,
  },
});

export default CustomCard;
