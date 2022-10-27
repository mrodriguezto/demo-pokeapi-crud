import React, { useEffect, useState } from "react";
import { View, TextInput, StyleProp, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useDebounceValue from "../../hooks/useDebounce";
import styles from "./styles";

type Props = {
  onDebounce: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};

const SearchBar = ({ style, onDebounce }: Props) => {
  const [textValue, setTextValue] = useState("");

  const debouncedValue = useDebounceValue(textValue);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  return (
    <View
      style={{
        ...styles.searchBox,
        ...(style as any),
        backgroundColor: "white",
      }}
    >
      <TextInput
        placeholder='Search pokemon...'
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={textValue}
        onChangeText={setTextValue}
      />
      <Ionicons name='search-outline' size={30} color='grey' />
    </View>
  );
};

export default SearchBar;
