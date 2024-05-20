import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

export default function Login() {

  return (
    <View style={styles.container}>
      <Text>Create an account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
   container:{
      flex: 1,
      padding: 14,
      paddingTop: 40      
   }
});
