import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Search } from "@/components/search";
import { useState } from "react";

export default function Tenants() {
  const [query, setQuery] = useState("");
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
            Tenants
          </Text>
          <Ionicons name="notifications-outline" size={25} />
        </View>
        <View style={styles.content}>
          <View style={{ flexDirection: "row" }}>
            <Search value={query} setValue={setQuery} />
            <TouchableOpacity style={{ alignItems: "center", padding: 10 }}>
              <Ionicons name="options" size={30} />
            </TouchableOpacity>
          </View>
          <View style={[styles.tenantCards]}>
            <View style={{ flexGrow: 1 }}>
              <Text
                style={[styles.cardTitle, { color: currentColors.textPrimary }]}
              >
                John Doe
              </Text>
              <Text
                style={[
                  styles.cardDesc,
                  { color: currentColors.textSecondary },
                ]}
              >
                House A1
              </Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="chatbox-outline" size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={24} />
            </TouchableOpacity>
          </View>
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
    gap: 10,
  },
  sectionTitle: {
    flexGrow: 1,
    fontSize: 20,
    fontWeight: 700,
  },
  tenantCards: {
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
    alignItems: "center",
    gap: 10,
  },
  cardTitle: {
    flexGrow: 1,
    fontSize: 20,
    fontWeight: 600,
  },
});
