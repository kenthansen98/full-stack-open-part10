import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    tabHeader: 'white',
    background: '#e1e4e8',
    itemBackground: 'white',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  appBarColor: {
    backgroundColor: '#24292e',
  }
};

export default theme;