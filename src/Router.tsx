import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './pages/authentication/SignUpPage';
import SigninScreen from './pages/authentication/LoginPage';
import AuthProvidersPage from './pages/authentication/AuthProvidersPage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { useTheme } from 'react-native-paper';
import { AUTH_PROVIDERS_PAGE_ID, EMAIL_LOGIN_PAGE_ID, EMAIL_SIGNUP_PAGE_ID } from './constants/AuthConstants';

const Stack = createNativeStackNavigator();

const Router: React.FC = () => {
  const theme = useTheme();

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={theme.colors.background} barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ header: () => null }}>
          <Stack.Screen name={AUTH_PROVIDERS_PAGE_ID} component={AuthProvidersPage} />
          <Stack.Screen name={EMAIL_SIGNUP_PAGE_ID} component={SignupScreen} />
          <Stack.Screen name={EMAIL_LOGIN_PAGE_ID} component={SigninScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
