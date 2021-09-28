import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, Text, Button } from '../../Components/global';
import { EMAIL_LOGIN_PAGE_ID, EMAIL_SIGNUP_PAGE_ID } from '../../constants/AuthConstants';

const AuthProviders: React.FC = () => {
  const handleGoogleAuth = () => {
    console.log('google auth');
  };

  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <Button style={styles.buttonStyle} onPress={handleGoogleAuth}>
        Continue with Gogle
      </Button>
      <Button onPress={() => navigation.navigate(EMAIL_LOGIN_PAGE_ID)} style={styles.buttonStyle}>
        Continue With Email
      </Button>
      <Text style={styles.signUpTextStyle} onPress={() => navigation.navigate(EMAIL_SIGNUP_PAGE_ID)}>
        Don’t have an account? Sign Up
      </Text>
      <Text style={styles.ppTextStyle}>
        By continuing, you agree to accept our Privacy Policy &amp; Terms of Service.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 32,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 56,
  },
  ppTextStyle: {
    textAlign: 'center',
    fontSize: 8,
    marginTop: 42,
    width: 160,
  },
  signUpTextStyle: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 24,
  },
  buttonStyle: {
    marginTop: 16,
  },
});

export default AuthProviders;
