import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AutoCompleteBox from '../components/AutoCompleteBox';
import AutoCompleteResultList from '../components/AutoCompleteResultList';
import { getPredictionWithDetail } from '../services.js';

const KEY = 'YOUR_API_KEY';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      loading: false
    };
  }
  onChangeText(query) {
    this.setState({ query });
    getPredictionWithDetail(query, KEY).then(result => {
      this.setState({ data: result, loading: false });
    });
  }
  render() {
    return (
      <View>
        <AutoCompleteBox
          placeholder="Masukan Nama Tempat"
          value={this.state.query}
          onChangeText={query => this.onChangeText(query)}
        />
        <AutoCompleteResultList data={this.state.data} />
      </View>
    );
  }
}

export default SearchPage;
