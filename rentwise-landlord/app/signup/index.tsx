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
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { CustomInput } from "../../components/CustomInput";

export default function Signup() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const currentColors = Colors[colorScheme ?? "light"];
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {
          backgroundColor: currentColors.background,
        },
      ]}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="arrow-back"
            size={34}
            color={currentColors.textPrimary}
          />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={[styles.title, { color: currentColors.textPrimary }]}>
            Create account
          </Text>
        </View>

        <View style={styles.stepsContainer}>
          <View
            style={[styles.circle, { backgroundColor: currentColors.primary }]}
          ></View>
          <View
            style={[
              styles.line,
              { backgroundColor: currentColors.textSecondary },
              step === 2 && { backgroundColor: currentColors.primary },
            ]}
          ></View>
          <View
            style={[
              styles.circle,
              { backgroundColor: currentColors.textSecondary },
              step === 2 && { backgroundColor: currentColors.primary },
            ]}
          ></View>
        </View>
        <View style={styles.content}>
          <CustomInput
            icon="person-outline"
            placeholder="First name"
            value={firstName}
            setValue={setFirstName}
            type={undefined}
          />
          <CustomInput
            icon="person-outline"
            placeholder="Last name"
            value={lastName}
            setValue={setLastName}
            type={undefined}
          />
          <CustomInput
            icon="call-outline"
            type="numeric"
            placeholder="07 00 000 000"
            value={phone}
            setValue={setPhone}
          />
          <CustomInput
            icon="mail-outline"
            type="email"
            placeholder="simonkimani@gmail.com"
            value={email}
            setValue={setEmail}
          />
        </View>
        <TouchableOpacity
          onPress={() => router.push("/home")}
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
            Next
          </Text>
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
  header: {
    marginTop: 20,
  },
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
    fontFamily: "KanitBlack",
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "700",
    margin: "auto",
  },
  button: {
    padding: 15,
    borderRadius: 40,
    marginTop: 20,
  },
  signup: {
    fontSize: 18,
  },
  stepsContainer: {
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    padding: 5,
    width: 15,
    height: 15,
    borderRadius: 20,
  },
  line: {
    flex: 1,
    height: 2,
  },
});
