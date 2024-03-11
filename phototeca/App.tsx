
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Initial from './app/pages/initial';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#61dafb" />
      <Initial />
    </SafeAreaView>
  );
}


