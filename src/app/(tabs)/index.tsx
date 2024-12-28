import * as React from "react";

import { View } from "react-native";
import { Text } from "src/src/components/ui/Text";
import { Heading } from "src/src/components/ui/Heading";
import MapView from "react-native-maps";
export default function HomeScreen() {
  // 1. Get the user's location

  return (
    <View>
      <Heading className="text-typography-700 font-body text-2xl">
        Home Screen
      </Heading>
      <MapView style={{ width: "100%", height: "100%" }} />
    </View>
  );
}
