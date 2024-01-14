import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
// App.js

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});



export default function App() {
  return (
    <View className='bg-black text-white '>
      <Text>Open up App.js to start working on your app! hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}


