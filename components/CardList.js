import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from './Card';

const keyExtractor = (item) => item.id.toString();

const CardList = ({ items = [], onPressComments }) => {
  const renderItem = (info) => {
    const { item = {} } = info;
    const author = item.author || {};
    
    return (
      <Card
        fullname={author.fullname || 'Anonymous'}
        imageUri={item.image || ''}
        initials={author.initials || '?'}
        backgroundColor={author.backgroundColor || '#6200EE'}
        onPressComments={() => onPressComments && onPressComments(item)}
      />
    );
  };

  return (
    <FlatList
      data={items}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CardList;
