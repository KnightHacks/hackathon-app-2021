// @ts-ignore
import {
  SENTRY_ORG_NAME,
  SENTRY_PROJECT_NAME,
  SENTRY_API_KEY,
} from 'react-native-dotenv';

export default {
  expo: {
    hooks: {
      postPublish: [
        {
          file: 'sentry-expo/upload-sourcemaps',
          config: {
            organization: SENTRY_ORG_NAME,
            project: SENTRY_PROJECT_NAME,
            authToken: SENTRY_API_KEY,
          },
        },
      ],
    },
  },
};
