import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';

const theme = {
  textInput: {
    colors: {
      text: '#474747',
      accent: '#ffffff',
      primary: '#A5A5A5',
      placeholder: '#A5A5A5',
      background: '#fafafa',
    },
  },
};

const SigninScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <Title>Signin to Talaav</Title>
      <TextInput
        style={styles.textInput}
        label="Email"
        value={email}
        onChangeText={email => setEmail(email)}
        theme={theme.textInput}
      />
      <TextInput
        style={styles.textInput}
        label="Password"
        value={password}
        onChangeText={password => setPassword(password)}
        theme={theme.textInput}
      />
      <Button color="white" style={styles.button} mode="outlined" onPress={() => navigation.navigate('Home Screen')}>
        Sign in
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  textInput: {
    width: '95%',
    margin: 2,
  },
  button: {
    width: '95%',
    padding: 5,
    backgroundColor: '#000',
    marginTop: 30,
  },
});

export default SigninScreen;
