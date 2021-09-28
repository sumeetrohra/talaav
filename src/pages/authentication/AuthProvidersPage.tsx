import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, Text, Button } from '../../Components/global';
import { EMAIL_LOGIN_PAGE_ID, EMAIL_SIGNUP_PAGE_ID } from '../../constants/AuthConstants';
import * as Google from 'expo-auth-session/providers/google';
import firebase from 'firebase/app';
import 'firebase/auth';
import * as WebBrowser from 'expo-web-browser';
import googleAuthConfig from '../../config/googleAuth';

WebBrowser.maybeCompleteAuthSession();

const AuthProviders: React.FC = () => {
  const [, response, promptAsyncGogleLogin] = Google.useIdTokenAuthRequest({
    clientId: googleAuthConfig.clientId,
    // TODO: Sumeet: add client Ids for standalone apps and web. Ref: https://docs.expo.dev/guides/authentication/#google
    // TODO: Sumeet: Linking app with urls. Ref: https://docs.expo.dev/guides/linking/
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch(error => console.log(error));
    }
  }, [response]);

  const handleGoogleAuth = () => {
    promptAsyncGogleLogin();
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
