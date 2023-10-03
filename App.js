import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  // Centennial College Progress Campus latitude and longitude
  const mylocation = {
    latitude: 43.7843, 
    longitude: -79.2265, 
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={mylocation}>
        <Marker coordinate={mylocation} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});