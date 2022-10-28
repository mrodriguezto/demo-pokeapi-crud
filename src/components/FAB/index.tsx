import { TouchableOpacity, View } from "react-native";
import styles from "./styles";

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
};

const FAB = ({ children, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.fab}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default FAB;
