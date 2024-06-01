import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export const Search = ({ placeholder, value, setValue, search }) => {
  const colorScheme = useColorScheme();
  const currentColors = Colors[colorScheme ?? "light"];
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={[styles.input]}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <TouchableOpacity
        onPress={() => search()}
        style={{ padding: 10, paddingRight: 0 }}
      >
        <Ionicons name="search" size={24} color={currentColors.textSecondary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    flexGrow: 1,
    borderWidth: 0,
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  inputWrapper: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EBEBE8",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
