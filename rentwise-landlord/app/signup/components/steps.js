import { View, StyleSheet, TextInput, Text } from 'react-native';

export const Steps = ({ steps })=> {
  return (
     <View style={styles.container}>
        <View style={[styles.circle, styles.completed]}></View>
        <View style={styles.line}></View>
        <View style={styles.circle}></View>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 10,
  },
  circle: {
    padding: 10,
    width: 20,
    height: 20,
    borderRadius: 20,
    fontWeight: '800',
    backgroundColor: "#fff",
  },
  line: {
    flex: 1,
    height: 5,
    backgroundColor: "#fff",
  },
  completed: {
    backgroundColor: "#000",
  }
});
