import * as React from "react";
//
import { View } from "react-native";
import { Text } from "src/src/components/ui/Text";
import { Heading } from "src/src/components/ui/Heading";
import MapView, { Marker } from "react-native-maps";
export default function HomeScreen() {
  const markers = [
    {
      id: 1,
      latitude: 37.78825,
      longitude: -122.4324,
      title: "Marker 1",
      description: "Description for Marker 1",
    },
    {
      id: 2,
      latitude: 37.75825,
      longitude: -122.4624,
      title: "Marker 2",
      description: "Description for Marker 2",
    },
    {
      id: 3,
      latitude: 37.76825,
      longitude: -122.4524,
      title: "Marker 3",
      description: "Description for Marker 3",
    },
  ];

  return (
    <View>
      <Heading className="text-typography-700 font-body text-2xl">
        Home Screen
      </Heading>
      <MapView style={{ width: "100%", height: "100%" }}>
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Marker 1"
          description="Description for Marker 1"
        />
      </MapView>
    </View>
  );
}
