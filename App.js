import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchPage from './containers/SearchPage';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40
  }
});
