import { Text, View } from "react-native";
// import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default function Index() {
  // return (
  //   <WebView
  //     style={styles.container}
  //     source={{ uri: 'https://docs.aelf.io' }}
  //   />
  // );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.!!!</Text>
      {/*<WebView*/}
      {/*  style={styles.container}*/}
      {/*  originWhitelist={['*']}*/}
      {/*  source={{ html: '<h1><center>Hello world</center></h1>' }}*/}
      {/*/>*/}
      {/*<WebView*/}
      {/*  style={styles.container}*/}
      {/*  source={{ uri: 'https://docs.aelf.io' }}*/}
      {/*/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
