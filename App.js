import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styles from './styles';

function App() {
  console.log('hello world');
  return (
    <View style={[styles.container, styles.redOne]}>
      <Text
        style={styles.text}>
        Hello world
      </Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'yellow',
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//     borderWidth: 1,
//     borderColor: 'red',
//     borderRadius: 50,
//     marginTop: 50,
//     marginHorizontal: 20,
//   },
//   text: {
//       fontSize: 50,
//       color: 'orange',
//       lineHeight: 100,
//   },
// });

export default App;
