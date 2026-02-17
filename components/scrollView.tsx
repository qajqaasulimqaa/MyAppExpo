import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const apiKey = process.env.EXPO_PUBLIC_NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

interface Article {
  title: string;
  description: string;
}

export default function Scroll() {
const [articles, setArticles] = useState<Article[]>([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
  const fetchNews = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); // 👈 what does this print?
      setArticles(data.articles || []);
    } catch (error) {
      console.error('Fetch failed:', error); // 👈 and this?
    } finally {
      setLoading(false); // this should ALWAYS run
    }
  };

  fetchNews();
}, []);

const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
    minWidth: '100%',
    backgroundColor: '#ad2617',
  },
  articleContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  description:{
    fontSize: 16,
  }
});

if (loading) return <Text>Loading...</Text>;

if (articles.length === 0) return <Text>No articles found</Text>;

return (
  <ScrollView style={styles.container}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>The Hottest  Articles Now:</Text>
    {articles.map((article, index) => (
      <View key={index} style={styles.articleContainer}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text> {/* ✅ added content */}
      </View>
    ))}
  </ScrollView>
);
}