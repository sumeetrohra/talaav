import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, Text, Button } from '../../Components/global';
import { EMAIL_LOGIN_PAGE_ID } from '../../constants/AuthConstants';

const AuthProviders: React.FC = () => {
  const handleGoogleAuth = () => {
    console.log('google auth');
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Button style={styles.buttonStyle} onPress={handleGoogleAuth}>
        Continue with Gogle
      </Button>
      <Text>OR</Text>
      <Button onPress={() => navigation.navigate(EMAIL_LOGIN_PAGE_ID)} style={styles.buttonStyle}>
        Use your Email
      </Button>
      <Text style={styles.textStyle}>
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
    paddingBottom: 60,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 24,
  },
  buttonStyle: {
    marginBottom: 12,
    marginTop: 12,
  },
});

export default AuthProviders;
