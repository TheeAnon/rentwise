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
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const currentColors = Colors[colorScheme ?? "light"];

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: currentColors.background }]}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={34} />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={[styles.title, { color: currentColors.textPrimary }]}>
            Welcome back!
          </Text>
        </View>
        <View style={styles.content}>
          <CustomInput
            icon="mail-outline"
            type="email"
            placeholder="Enter your email"
            value={email}
            setValue={setEmail}
          />
          <CustomInput
            icon="lock-closed-outline"
            type="password"
            placeholder="Enter your password"
            value={password}
            setValue={setPassword}
          />
        </View>
        <Text
          style={[
            styles.forgotPass,
            { color: currentColors.buttonPrimaryBackground },
          ]}
        >
          Forgot password?
        </Text>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: currentColors.buttonPrimaryBackground },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              { color: currentColors.buttonPrimaryText },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              justifyContent: "center",
              marginVertical: 20,
            }}
          >
            <Text
              style={[styles.signup, { color: currentColors.textSecondary }]}
            >
              Don't have an account?
            </Text>
            <Text
              style={[
                styles.signup,
                { color: currentColors.buttonPrimaryBackground },
              ]}
            >
              Sign up
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    flexGrow: 1,
    padding: 14,
    paddingTop: 30,
  },
  header: { marginTop: 20 },
  content: {
    flex: 1,
    paddingTop: 20,
    gap: 15,
    marginBottom: 10,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 50,
    fontFamily: "KanitBlack",
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "700",
    margin: "auto",
  },
  button: {
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  forgotPass: {
    fontSize: 18,
    marginLeft: "auto",
    marginTop: 10,
  },
  signup: {
    fontSize: 18,
  },
});
