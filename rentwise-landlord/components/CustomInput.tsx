import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export const CustomInput = ({ type, placeholder, icon, value, setValue }) => {
  const colorScheme = useColorScheme();
  const currentColors = Colors[colorScheme ?? "light"];
  const [eye, setEye] = useState(false);

  const isPasswordType = type === "password";

  return (
    <View style={styles.inputWrapper}>
      <Ionicons name={icon} size={24} color={currentColors.textSecondary} />
      <TextInput
        keyboardType={type ? type : "default"}
        style={[styles.input]}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => setValue(text)}
        secureTextEntry={isPasswordType && !eye}
      />
      {isPasswordType && (
        <TouchableOpacity
          onPress={() => setEye(!eye)}
          style={{ padding: 10, paddingRight: 0 }}
        >
          <Ionicons
            name={eye ? "eye-outline" : "eye-off-outline"}
            size={24}
            color={currentColors.textSecondary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 0,
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EBEBE8",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
