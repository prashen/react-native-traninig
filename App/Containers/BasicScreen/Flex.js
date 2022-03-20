import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function FlexExample() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.firstText}>My property is Flex : 1</Text>
      <Text style={styles.secondText}>My property is Flex : 2</Text>
      <Text style={styles.thirdText}>My property is Flex : 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  firstText: {
    flex: 1,
    backgroundColor: "goldenrod",
    fontSize:20,
  },
  secondText: {
    flex: 2,
    backgroundColor: "olive",
    fontSize:20,
  },
  thirdText: {
    flex: 3,
    backgroundColor: "chocolate",
    fontSize:20,
  },
});

export {FlexExample};
