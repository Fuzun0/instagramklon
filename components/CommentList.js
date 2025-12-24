import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const CommentList = ({ items = [] }) => {
  return (
    <ScrollView style={styles.container}>
      {items.map((comment, index) => (
        <View key={index} style={styles.commentItem}>
          <Text style={styles.commentText}>{comment}</Text>
        </View>
      ))}
      {items.length === 0 && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No comments yet</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  commentItem: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
  },
  commentText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});

export default CommentList;
