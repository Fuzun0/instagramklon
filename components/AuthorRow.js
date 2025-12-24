import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Avatar from './Avatar';

const AuthorRow = ({ 
  fullname = 'Anonymous', 
  size = 35,
  backgroundColor = '#6200EE',
  initials = '?',
  onPressComments,
  commentCount = 0
}) => {
  return (
    <View style={styles.container}>
      <Avatar 
        size={size} 
        backgroundColor={backgroundColor} 
        initials={initials} 
      />
      <Text style={styles.text}>{fullname}</Text>
      <TouchableOpacity onPress={onPressComments}>
        <Text style={styles.commentsText}>
          Comments {commentCount > 0 && `(${commentCount})`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    height: 50, 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 10 
  },
  text: { 
    flex: 1, 
    marginHorizontal: 6,
    fontWeight: '600',
    fontSize: 14,
  },
  commentsText: {
    color: '#6200EE',
    fontWeight: '500',
  },
});

export default AuthorRow;
