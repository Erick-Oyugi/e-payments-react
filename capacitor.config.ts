import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.epayments.ke',
  appName: 'e-payments',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
