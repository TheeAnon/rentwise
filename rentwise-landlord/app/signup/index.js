<<<<<<< HEAD
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Signup = () => {
  return (
    <View>
      <Text>Signup</Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
=======
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { CustomInput } from '../../components/CustomInput';
import { Steps } from './components/steps';

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Create account</Text>
        </View>
        <Steps />
        <View style={styles.content}>
          <CustomInput label="First name" placeholder="Simon" value={firstName} setValue={setFirstName} />
          <CustomInput label="Last name" placeholder="Kimani" value={lastName} setValue={setLastName} />
          <CustomInput label="Phone number" type="numeric" placeholder="07 00 000 000" value={phone} setValue={setPhone} />
          <CustomInput label="Email" type="email" placeholder="simonkimani@gmail.com" value={email} setValue={setEmail} />
        </View>
        <TouchableOpacity style={styles.nextButton}>
           <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#B1D8B7'
  },
  container: {
    flexGrow: 1,
    padding: 14,
    paddingTop: 30,
  },
  header: {
  },
  content: {
    flex: 1,
    paddingTop: 20,
    gap: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 50,
    color: "#000",
  },
  nextText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff'
  },
  nextButton: {
    marginLeft: 'auto',
    padding: 15,
    borderRadius: 5,
    backgroundColor: 'black',
  },
});
>>>>>>> 5b5ce66ed91152ed312a615e8b82ea6a34fc366c
