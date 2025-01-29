import * as React from "react";
import { View } from "react-native";

import { useQuery } from "@tanstack/react-query";

import MapView, { Marker } from "react-native-maps";
import useFetchCrimes from "src/hooks/useCrimes";
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

  const { data: crimes } = useQuery({
    queryKey: ["crimes"],
    queryFn: () => useFetchCrimes("locationname=Helsingborg"),
  });

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F5FCFF",
        }}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {crimes?.map((marker) => (
          <Marker
            key={marker.id}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,

              bottom: 0,
            }}
            coordinate={{
              latitude: Number(marker.location.gps.split(",")[0]),
              longitude: Number(marker.location.gps.split(",")[1]),
            }}
            title={marker.name}
            description={marker.summary}
          />
        ))}
      </MapView>
    </View>
  );
}
