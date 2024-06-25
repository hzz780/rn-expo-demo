import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

export default function Index() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://docs.aelf.io' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
});
