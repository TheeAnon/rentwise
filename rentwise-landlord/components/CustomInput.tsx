import { View, StyleSheet, TextInput, Text } from 'react-native';

export const CustomInput = ({ label, type, value, setValue})=> {
  return (
     <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
           type={type?type:'text'}
           style={styles.input}
           placeholder={label}
           value={value}
           onChangeText={text => setValue(text)}
         />
     </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    paddingLeft: 20
  },
  inputContainer: {
    paddingTop: 9,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 15,
    fontSize: 14,
    top: 0,
    zIndex: 1,
    paddingHorizontal: 10,
  }
});
