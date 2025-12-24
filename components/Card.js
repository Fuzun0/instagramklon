import React, { useState } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import AuthorRow from './AuthorRow';

const Card = ({ 
  fullname = 'Anonymous',
  imageUri,
  initials = '?',
  backgroundColor = '#6200EE',
  onPressComments
}) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <View>
      <AuthorRow
        fullname={fullname}
        initials={initials}
        backgroundColor={backgroundColor}
        onPressComments={onPressComments}
      />
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
          onLoad={handleLoad}
        />
        {loading && (
          <ActivityIndicator 
            style={StyleSheet.absoluteFill} 
            size={'large'} 
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: '#f0f0f0',
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Card;
