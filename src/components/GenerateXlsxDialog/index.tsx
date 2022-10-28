import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Dialog from "react-native-dialog";

import FAB from "../FAB";
import styles from "./styles";

type Props = {
  onGenerate: (numberOfItems: number) => void;
};

const GenerateXlsxDialog = ({ onGenerate }: Props) => {
  const [visible, setVisible] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(0);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleGenerate = () => {
    if (numberOfItems <= 0) return;

    onGenerate(numberOfItems);
    setVisible(false);
  };

  return (
    <>
      <FAB onPress={showDialog}>
        <Ionicons name='library-outline' size={24} color='#fff' />
      </FAB>
      <View>
        <Dialog.Container visible={visible}>
          <Dialog.Title>Generate XLSX</Dialog.Title>
          <Dialog.Description>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Enter the number of items to save
              </Text>
              <TextInput
                style={styles.input}
                keyboardType='number-pad'
                onChangeText={(value) => setNumberOfItems(parseInt(value))}
              />
            </View>
          </Dialog.Description>
          <Dialog.Button label='Cancel' onPress={handleCancel} />
          <Dialog.Button label='Generate' onPress={handleGenerate} />
        </Dialog.Container>
      </View>
    </>
  );
};

export default GenerateXlsxDialog;
