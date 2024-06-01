import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Constants from "expo";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const currentColors = Colors[colorScheme ?? "light"];

  return (
    <View
      style={[styles.container, { backgroundColor: currentColors.background }]}
    >
      <ScrollView>
        <View style={styles.header}>
          <Text style={[styles.title, { color: currentColors.textPrimary }]}>
            Home
          </Text>
        </View>
        <View style={styles.content}>
          <Text
            style={[styles.sectionTitle, { color: currentColors.textPrimary }]}
          >
            Home
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    paddingTop: 40,
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
    fontSize: 40,
    fontWeight: 800,
  },
  content: {
    marginTop: 20,
    flex: 1,
  },
  sectionTitle: {
    flexGrow: 1,
    fontSize: 20,
    fontWeight: 700,
  },
});
