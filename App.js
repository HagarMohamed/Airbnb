
import { StyleSheet, StatusBar } from 'react-native';
import Router from './src/navigation/Router';
import {SafeAreaView}  from "react-native-safe-area-context";
import SearchSuggestionScreen from './src/screen/GuestScreen';

export default function App() {
  return (
    <SafeAreaView  style={styles.container}>
    <Router>
      {/* <PostScreen></PostScreen> */}
      {/* <SearchSuggestionScreen></SearchSuggestionScreen> */}
      {/* <GuestScreen></GuestScreen> */}
    </Router>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:5,
    backgroundColor: '#fff',
    marginTop:StatusBar.currentHeight
  },
});




