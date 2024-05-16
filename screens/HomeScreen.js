import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const places = [
    {
      name: "Kozlu Sahili",
      description: "Zonguldak'ta güzel bir plaj.",
      imageUrl: "https://cdn.pixabay.com/photo/2019/07/31/09/34/machu-picchu-4372430_1280.jpg"
    },
    {
      name: "Çaycuma",
      description: "Doğal güzellikleri ve huzurlu atmosferiyle bilinen bir ilçe.",
      imageUrl: "https://cdn.pixabay.com/photo/2017/02/21/21/00/great-wall-of-china-2088667_1280.jpg"
    },
    {
      name: "Ereğli",
      description: "Güzel manzaralar ve zengin kültürel mirasa sahip tarihi bir ilçe.",
      imageUrl: "https://cdn.pixabay.com/photo/2016/11/29/05/08/rocks-1867416_1280.jpg"
    },
    {
      name: "Devrek",
      description: "Geleneksel ahşap bastonları ve doğal güzellikleriyle ünlü.",
      imageUrl: "https://cdn.pixabay.com/photo/2016/01/19/17/42/sydney-opera-house-1149949_1280.jpg"
    },
    {
      name: "Filyos",
      description: "Tarihi kalıntıları ve güzel plajı olan bir sahil kasabası.",
      imageUrl: "https://cdn.pixabay.com/photo/2019/07/31/09/34/machu-picchu-4372430_1280.jpg"
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Zonguldak'taki Harika Yerleri Keşfedin</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {places.map((place, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate('Detail', { place })}>
            <Image source={{ uri: place.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{place.name}</Text>
            <Text style={styles.description}>{place.description}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  card: {
    margin: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: "gray"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  description: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10,
    color: '#555',
  },
  bottomSpacer: {
    height: 80,
  },
});

export default HomeScreen;
