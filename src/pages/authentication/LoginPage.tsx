import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, Text, Button, TextInput } from '../../Components/global';
import { verifyEmail, verifyPassword } from '../../utils/authUtils';
import { login } from '../../api/auth';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLoginClick = () => {
    if (verifyEmail(email) && verifyPassword(password)) {
      login(email, password);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleStyle}>Login</Text>
      <Text style={styles.subTitleStyle}>Login with Email</Text>
      <TextInput value={email} onChangeText={text => setEmail(text)} label="Email" />
      <TextInput value={password} onChangeText={text => setPassword(text)} label="Password" />
      <Button onPress={handleLoginClick} style={styles.buttonStyle}>
        Login
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

export default LoginPage;
