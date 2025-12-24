import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator, Text, Platform, StatusBar } from 'react-native';
import CardList from '../components/CardList';
import { fetchImages, getImageFromId } from '../utils/api';
import getInitials from '../utils/getInitials';
import getAvatarColor from '../utils/getAvatarColor';

const Feed = ({ commentsForItem = {}, onPressComments }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const images = await fetchImages();
        
        // Transform Unsplash data to match our format
        const formattedImages = images.slice(0, 10).map((img) => ({
          id: img.id,
          author: {
            fullname: img.author,
            initials: getInitials(img.author),
            backgroundColor: getAvatarColor(img.author),
          },
          image: getImageFromId(img.id),
        }));
        
        setLoading(false);
        setItems(formattedImages);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };

    loadImages();
  }, []);

  const handlePressComments = (item) => {
    if (onPressComments) {
      onPressComments(item.id);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Error loading images</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <CardList 
        items={items} 
        onPressComments={handlePressComments}
        commentsForItem={commentsForItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 0,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default Feed;
