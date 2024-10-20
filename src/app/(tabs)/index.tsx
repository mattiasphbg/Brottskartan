import * as React from "react";
import { View } from "react-native";
import { Text } from "src/src/components/ui/Text";
import { Heading } from "src/src/components/ui/Heading";
export default function HomeScreen() {
  return (
    <View>
      <Heading className="text-typography-700 font-body text-2xl">
        Home Screen
      </Heading>
      <Text className="text-typography-700 font-body text-base">
        Home Screen
      </Text>
    </View>
  );
}
