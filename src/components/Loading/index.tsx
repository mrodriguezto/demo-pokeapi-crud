import React from "react";
import { View, Text } from "react-native";
import Spinner from "../Spinner";

const Loading = ({ size }: { size?: number }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Spinner size={size} />
      <Text>Loading...</Text>
    </View>
  );
};

export default Loading;
