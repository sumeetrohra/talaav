// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  API_KEY_DEV,
  AUTH_DOMAIN_DEV,
  PROJECT_ID_DEV,
  STORAGE_BUCKET_DEV,
  MESSAGING_SENDER_ID_DEV,
  APP_ID_DEV,
  MEASUREMENT_ID_DEV,
  NODE_ENV,
} from 'react-native-dotenv';

const firebaseConfig =
  NODE_ENV === 'DEV'
    ? {
        apiKey: API_KEY_DEV,
        authDomain: AUTH_DOMAIN_DEV,
        projectId: PROJECT_ID_DEV,
        storageBucket: STORAGE_BUCKET_DEV,
        messagingSenderId: MESSAGING_SENDER_ID_DEV,
        appId: APP_ID_DEV,
        measurementId: MEASUREMENT_ID_DEV,
      }
    : {};

export { firebaseConfig };
