import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Divider, TextInput, Title } from 'react-native-paper';

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

const SignupScreen: React.FC = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <Title>Signup to Talaav</Title>
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
      <TextInput
        style={styles.textInput}
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={cpassword => setConfirmPassword(cpassword)}
        theme={theme.textInput}
      />
      <Divider />
      <Button color="white" style={styles.button} mode="outlined" onPress={() => navigation.navigate('Signin Screen')}>
        Sign up
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
    padding: 8,
    backgroundColor: '#000',
    marginTop: 20,
  },
});

export default SignupScreen;
