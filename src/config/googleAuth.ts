// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { GOOGLE_AUTH_CLIENT_ID, NODE_ENV } from 'react-native-dotenv';

let googleAuthConfig;

if (NODE_ENV === 'DEV') {
  googleAuthConfig = {
    clientId: GOOGLE_AUTH_CLIENT_ID,
  };
}

export default googleAuthConfig;
