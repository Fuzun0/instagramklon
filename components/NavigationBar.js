import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NavigationBar = ({ title = 'Navigation', leftText, onPressLeft }) => {
  return (
    <View style={styles.container}>
      {leftText && (
        <TouchableOpacity style={styles.leftButton} onPress={onPressLeft}>
          <Text style={styles.leftText}>{leftText}</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  leftButton: {
    position: 'absolute',
    left: 10,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  leftText: {
    fontSize: 16,
    color: '#6200EE',
  },
});

export default NavigationBar;
