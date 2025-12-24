# Instagram Clone - React Native

**Geliştirici:** Hüseyin Furkan Uzun  
**Öğrenci No:** 20235070309

React Native ve Expo kullanarak geliştirilmiş Instagram benzeri bir görsel feed uygulaması.

## 🚀 Özellikler

- 📸 Unsplash API ile gerçek görseller
- 💬 Yorum yapma sistemi
- 💾 AsyncStorage ile kalıcı veri saklama
- 🎨 Avatar bileşenleri
- 📱 Modal ile yorum ekranı
- ⚡ FlatList ile performanslı liste

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Expo Go uygulamasını indir (mobil cihazınıza)
# iOS: App Store'dan
# Android: Google Play Store'dan

# Uygulamayı başlat
npm start
```

## 🏗️ Proje Yapısı

```
instagram_clone/
├── components/
│   ├── Avatar.js
│   ├── AuthorRow.js
│   ├── Card.js
│   ├── CardList.js
│   ├── CommentInput.js
│   ├── CommentList.js
│   └── NavigationBar.js
├── screens/
│   ├── Feed.js
│   └── Comments.js
├── utils/
│   ├── api.js
│   ├── getInitials.js
│   └── getAvatarColor.js
├── App.js
└── package.json
```

## 🛠️ Teknolojiler

- React Native
- Expo SDK 54
- AsyncStorage
- Unsplash API

## 📱 Kullanım

1. Uygulama açıldığında görsel feed yüklenir
2. Herhangi bir görseldeki "Comments" linkine tıklayın
3. Yorum yazın ve Enter tuşuna basın veya "Post" butonuna tıklayın
4. Yorumlar cihazda kalıcı olarak saklanır

## 🎨 Bileşenler

- **Avatar**: Dairesel profil ikonu
- **AuthorRow**: Yazar bilgisi ve yorum linki
- **Card**: Görsel kartı
- **CardList**: FlatList ile kartları listeler
- **CommentInput**: Yorum girişi
- **CommentList**: Yorumları gösterir
- **NavigationBar**: Modal başlığı

## 📄 Lisans

MIT
