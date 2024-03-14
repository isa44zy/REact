import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
  <ScrollView>
   <Image style={styles.container}
   source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgn2L74bsTCX6FbhsBzEFLnaq9gzh5-je4Q&usqp=CAU'}}
   />
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
