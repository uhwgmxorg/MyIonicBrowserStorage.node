import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'my-ionic-browser-storage',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
