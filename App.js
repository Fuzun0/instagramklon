import React, { useState, useEffect } from 'react';
import { Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feed from './screens/Feed';
import Comments from './screens/Comments';

const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';

export default function App() {
  // State: yorumlar, modal görünürlüğü, seçili görsel
  const [commentsForItem, setCommentsForItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  // AsyncStorage'dan yorumları yükle (componentDidMount eşdeğeri)
  useEffect(() => {
    const loadComments = async () => {
      try {
        // Veriyi Yükleme
        const comments = await AsyncStorage.getItem(ASYNC_STORAGE_COMMENTS_KEY);
        setCommentsForItem(comments ? JSON.parse(comments) : {});
      } catch (error) {
        console.error('Error loading comments:', error);
      }
    };

    loadComments();
  }, []);

  // Modal açma - Comments ekranını göster
  const openCommentScreen = (id) => {
    setSelectedItemId(id);
    setShowModal(true);
  };

  // Modal kapatma
  const closeCommentScreen = () => {
    setShowModal(false);
    setSelectedItemId(null);
  };

  // Yorum gönderme ve AsyncStorage'a kaydetme
  const onSubmitComment = async (text) => {
    if (!selectedItemId || !text) return;
    
    const comments = commentsForItem[selectedItemId] || [];
    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text],
    };

    setCommentsForItem(updated);

    try {
      // Veriyi Kaydetme
      await AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY, JSON.stringify(updated));
    } catch (error) {
      console.error('Error saving comment:', error);
    }
  };

  return (
    <>
      <Feed
        commentsForItem={commentsForItem}
        onPressComments={openCommentScreen}
      />
      {/* Modal: Yorum ekranını göster */}
      <Modal
        visible={showModal}
        animationType="slide"
        onRequestClose={closeCommentScreen}
      >
        <Comments
          comments={(selectedItemId && commentsForItem[selectedItemId]) || []}
          onClose={closeCommentScreen}
          onSubmitComment={onSubmitComment}
        />
      </Modal>
    </>
  );
}
