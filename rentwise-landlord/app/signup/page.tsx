import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

export default function Signup() {

  return (
    <View style={styles.container}>
      <Text>Create an account</Text>
    </View>
  );
}

const style = StyleSheet.create({
   container:{
      flex: 1
   }
});
