import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { CustomInput } from "../../components/CustomInput";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome back!</Text>
        </View>
        <View style={styles.content}>
          <CustomInput
            label="Email"
            type="email"
            placeholder="simonkimani@gmail.com"
            value={email}
            setValue={setEmail}
          />
          <CustomInput
            label="Password"
            type="password"
            placeholder="******"
            value={password}
            setValue={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#B1D8B7",
  },
  container: {
    flexGrow: 1,
    padding: 14,
    paddingTop: 30,
  },
  header: {},
  content: {
    flex: 1,
    paddingTop: 20,
    gap: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 50,
    color: "#000",
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "black",
  },
});
