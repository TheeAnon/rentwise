import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import Constants from "expo-constants";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function GetStarted() {
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
        <View style={styles.header}>
          <Text style={[styles.title, { color: currentColors.textPrimary }]}>
            Rent
          </Text>
          <Text style={[styles.title, { color: currentColors.primary }]}>
            Wise
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={[styles.title, { color: currentColors.textPrimary }]}>
            Get started
          </Text>
          <Text style={[styles.desc, { color: currentColors.textSecondary }]}>
            Easily manage your properties, tenants, and maintenance requests all
            in one place.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/signup")}
          style={[
            styles.button,
            {
              backgroundColor: currentColors.buttonPrimaryBackground,
            },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              { color: currentColors.buttonPrimaryText },
            ]}
          >
            Create account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/login")}
          style={[
            styles.buttonOutline,
            {
              borderColor: currentColors.buttonPrimaryBackground,
            },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              { color: currentColors.buttonPrimaryBackground },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text style={[styles.desc, { color: currentColors.textSecondary }]}>
          Easily manage your properties, tenants, and maintenance requests all
          in one place.
        </Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 20,
    gap: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 50,
  },
  desc: {
    fontSize: 18,
    textAlign: "center",
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "700",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonOutline: {
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    borderRadius: 5,
    borderWidth: 2,
  },
});
