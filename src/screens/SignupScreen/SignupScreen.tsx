import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Button, Divider, TextInput, Title, useTheme } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const SignupScreen: React.FC<NativeStackScreenProps<any, any>> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const theme = useTheme();

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: theme.colors.background, width: '100%', height: '100%' }}>
        <Title>Signup to Talaav</Title>
        <TextInput mode="outlined" label="Email" value={email} onChangeText={email => setEmail(email)} />
        <TextInput label="Password" value={password} onChangeText={password => setPassword(password)} />
        <TextInput
          theme={theme}
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={cpassword => setConfirmPassword(cpassword)}
        />
        <Divider />
        <Button mode="contained" onPress={() => navigation.navigate('Signin Screen')} theme={theme}>
          Sign up
        </Button>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   textInput: {
//     width: '95%',
//     margin: 2,
//   },
//   button: {
//     width: '95%',
//     padding: 8,
//     backgroundColor: '#000',
//     marginTop: 20,
//   },
// });

export default SignupScreen;
