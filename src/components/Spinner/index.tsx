import React from "react";
import { ActivityIndicator } from "react-native";

const Spinner = ({ size = 50 }: { size?: number }) => {
  return <ActivityIndicator size={size} />;
};

export default Spinner;
