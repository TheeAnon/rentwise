<<<<<<< HEAD
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
=======
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
>>>>>>> 5b5ce66ed91152ed312a615e8b82ea6a34fc366c
