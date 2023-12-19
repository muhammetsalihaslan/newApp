import React from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={news_data}
          renderItem={({item}) => <NewsCard news={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
});

export default App;
