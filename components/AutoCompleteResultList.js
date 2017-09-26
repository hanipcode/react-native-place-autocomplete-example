import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  AutoCompleteResultList: {
    marginHorizontal: 22,
    borderWidth: 2,
    borderColor: '#aaa',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 1
  },
  AutoCompleteResultItem: {
    padding: 10,
    marginHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#aaa'
  },
  titleText: {
    fontWeight: '600',
    color: '#333',
    marginTop: 5,
    marginBottom: 3,
    fontSize: 16
  },
  text: {
    marginLeft: 2,
    color: '#999'
  }
});

class AutoCompleteResultList extends Component {
  renderItem({ item }) {
    return (
      <View style={styles.AutoCompleteResultItem}>
        <Text style={styles.titleText}>{item.name}</Text>
        <Text style={styles.text}>{item.formatted_address}</Text>
      </View>
    );
  }
  render() {
    return (
      <View>
        {this.props.data.length > 0 && (
          <FlatList
            {...this.props}
            contentContainerStyle={styles.AutoCompleteResultList}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
}

AutoCompleteResultList.defaultProps = {
  data: [
    {
      name: 'Nusajaya',
      formatted_address: 'Nusajaya, Johor, Malaysia',
      geometry: { location: [Object], viewport: [Object] },
      placeId: 'ChIJ4ZAlkm0M2jER0pKJ66wKpB8'
    },
    {
      name: 'Penida Island',
      formatted_address:
        'Penida Island, Nusapenida, Klungkung Regency, Bali, Indonesia',
      geometry: { location: [Object], viewport: [Object] },
      placeId: 'ChIJ0xkTTRlx0i0Re3sZsgY3Olw'
    },
    {
      name: 'Lembongan island',
      formatted_address:
        'Lembongan island, Jungutbatu, Nusapenida, Klungkung Regency, Bali, Indonesia',
      geometry: { location: [Object], viewport: [Object] },
      placeId: 'ChIJ82l7U59t0i0RM6BnbL2UG9w'
    },
    {
      name: 'West Nusa Tenggara',
      formatted_address: 'West Nusa Tenggara, Indonesia',
      geometry: { location: [Object], viewport: [Object] },
      placeId: 'ChIJIe0SGpQNuC0RxXX30MzCZ2k'
    },
    {
      name: 'Nusaybin',
      formatted_address: 'Nusaybin, 47300 Nusaybin/Mardin, Turkey',
      geometry: { location: [Object], viewport: [Object] },
      placeId: 'ChIJy-PmO9cPCkARZ4iqwGNE7sU'
    }
  ]
};
export default AutoCompleteResultList;
