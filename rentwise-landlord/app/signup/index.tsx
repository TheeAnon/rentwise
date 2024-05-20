import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { CustomInput } from '../../components/CustomInput';

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Create account</Text>
          <Text style={styles.subtitle}>Manage your property, all under one roof.</Text>
        </View>
        <View style={styles.content}>
          <CustomInput label="First name" value={firstName} setValue={setFirstName} />
          <CustomInput label="Last name" value={lastName} setValue={setLastName} />
          <CustomInput label="Phone number" type="phone" value={phone} setValue={setPhone} />
          <CustomInput label="Email" type="email" value={email} setValue={setEmail} />
        </View>
        <TouchableOpacity style={styles.nextButton}>
           <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    padding: 14,
    paddingTop: 30,
  },
  header: {},
  content: {
    flex: 1,
    paddingTop: 20,
    gap: 15
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 50,
  },
  subtitle: {
    fontSe: 20,
  },
  nextText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff'
  },
  nextButton: {
    marginLeft: 'auto',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'black',
  },
});
