import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import useForm from "../hooks/useForm";
import { RootStackParams } from "../navigation/StackNavigator";
import { SimplePokemon } from "../types";
import FAB from "../components/FAB";

type Props = NativeStackScreenProps<RootStackParams, "EditPokemonScreen">;

const initialData: SimplePokemon = {
  id: "",
  name: "",
  picture: "",
};

const EditPokemonScreen = ({ navigation, route }: Props) => {
  const { pokemon } = route.params;
  const isEditting = Boolean(pokemon);
  const { id, name, picture, form, setValue } = useForm(pokemon || initialData);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.cancelled) {
      setValue(result.uri, "picture");
    }
  };

  const handleSave = async () => {
    try {
      const prevItems = (await AsyncStorage.getItem("@created")) || "[]";
      await AsyncStorage.setItem(
        "@created",
        JSON.stringify([...JSON.parse(prevItems), form])
      );
    } catch (e) {
      console.log("An error has occurred saving to storage");
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.screenTitle}>
        {isEditting ? "Edit Pokemon" : "New Pokemon"}
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>ID:</Text>
        <TextInput
          style={styles.input}
          placeholder='ID'
          value={id}
          onChangeText={(value) => setValue(value, "id")}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder='Name'
          value={name}
          onChangeText={(value) => setValue(value, "name")}
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Button color='#222' title='Pick an image' onPress={pickImage} />
        {picture && (
          <Image source={{ uri: picture }} style={styles.previewImage} />
        )}
      </View>

      <Text>{JSON.stringify(form, null, 2)}</Text>
      <FAB onPress={handleSave}>
        <Ionicons size={24} color='#fff' name='save' />
      </FAB>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    padding: 24,
    flex: 1,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },
  label: {
    marginBottom: 4,
  },
  input: {
    borderRadius: 4,
    borderColor: "#ddd",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 2,
  },
  inputContainer: {
    marginBottom: 8,
  },
  previewImage: { width: 200, height: 200, marginVertical: 16 },
});

export default EditPokemonScreen;
