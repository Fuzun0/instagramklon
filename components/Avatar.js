import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Avatar = ({ size = 50, backgroundColor = '#6200EE', initials = '?' }) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <Text style={[styles.text, { fontSize: size * 0.4 }]}>{initials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  text: { 
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Avatar;
