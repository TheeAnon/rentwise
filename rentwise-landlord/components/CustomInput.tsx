import { View, StyleSheet, TextInput, Text } from 'react-native';

export const CustomInput = ({ label, type, placeholder,  value, setValue})=> {
  return (
     <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
           keyboardType={type?type:'text'}
           style={styles.input}
           placeholder={placeholder}
           value={value}
           onChangeText={text => setValue(text)}
         />
     </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 20,
    backgroundColor: "#EBEBE8",
  },
  inputContainer: {
    paddingTop: 9,
  },
  label: {
    color: "#3D550C",
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 5,
    fontWeight: '400',
  }
});
