const qs = require('qs');
const fetch = require('react-native-cancelable-fetch');

function getPredictionList(searchQuery, key) {
  const queryString = qs.stringify({
    input: searchQuery,
    type: 'geocode',
    key
  });
  const uri = `https://maps.googleapis.com/maps/api/place/autocomplete/json?${queryString}`;
  return fetch(uri, null, 'prediction').then(response => response.json());
}

function getPlaceDetails(placeId, key) {
  const queryString = qs.stringify({
    placeid: placeId,
    key
  });
  const uri = `https://maps.googleapis.com/maps/api/place/details/json?${queryString}`;

  return fetch(uri, null, 'placeDetail').then(response => response.json());
}

export function getPredictionWithDetail(searchQuery, key) {
  fetch.abort('prediction');
  fetch.abort('placeDetail');
  return getPredictionList(searchQuery, key)
    .then(result => {
      const predictions = result.predictions;
      const predictionsPromise = predictions.map(prediction =>
        getPlaceDetails(prediction.place_id, key)
      );
      return Promise.all(predictionsPromise);
    })
    .then(data => {
      console.log(data);
      const predictionDetails = data.map(predictionItem => ({
        name: predictionItem.result.name,
        formatted_address: predictionItem.result.formatted_address,
        geometry: predictionItem.result.geometry,
        placeId: predictionItem.result.place_id
      }));
      return predictionDetails;
    })
    .catch(err => {
      console.log(err.toString());
      return err;
    });
}

// getPredictionWithDetail('Nusa', 'AIzaSyBc9_79lu5welQPRjLaSQS8iNhLgac6Zr8');
// getPlaceDetails('ChIJIe0SGpQNuC0RxXX30MzCZ2k', 'Your_api_key').then(result => {
//   console.log(result);
// });
// getPredictionList('Nusa', 'AIzaSyBc9_79lu5welQPRjLaSQS8iNhLgac6Zr8');
