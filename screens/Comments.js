import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';

const Comments = ({ comments = [], onClose, onSubmitComment }) => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar
        title="Comments"
        leftText="Close"
        onPressLeft={onClose}
      />
      <CommentList items={comments} />
      <CommentInput
        placeholder="Leave a comment"
        onSubmit={onSubmitComment}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Comments;
