import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Route from './src/routes/Routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Route />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
