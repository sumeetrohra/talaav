import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, Text, Button, TextInput } from '../../Components/global';
import { verifyEmail, verifyPassword } from '../../utils/authUtils';
import { signUp } from '../../api/auth';

const SignUpPage: React.FC<NativeStackScreenProps<any, any>> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSignUpClick = () => {
    if (verifyEmail(email) && verifyPassword(password) && password === confirmPassword) {
      signUp(email, password);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleStyle}>Sign Up</Text>
      <Text style={styles.subTitleStyle}>Sign Up with Email</Text>
      <TextInput value={email} onChangeText={text => setEmail(text)} label="Email" />
      <TextInput value={password} onChangeText={text => setPassword(text)} label="Password" />
      <TextInput value={confirmPassword} onChangeText={text => setConfirmPassword(text)} label="Confirm Password" />
      <Button onPress={handleSignUpClick} style={styles.buttonStyle}>
        Sign Up
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 32,
    flex: 1,
    width: '100%',
    paddingTop: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 24,
  },
  subTitleStyle: {
    fontSize: 12,
    marginBottom: 40,
  },
  buttonStyle: {
    marginTop: 56,
  },
});

export default SignUpPage;
