import React from 'react';
import { StyleSheet, View, Text } from "react-native";

const AlignSelfExample = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1, backgroundColor: '#99aead' }}>
        <Text style={styles.textStyle}>Parent- alignItems : flex-start, alignSelf : flex-end</Text>
        <View style={{ flex: 1, alignItems: 'flex-start', }}>
          <View style={{ height: 40, width: 50, backgroundColor: 'indigo', }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkgreen', alignSelf: 'flex-end', }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'maroon' }} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#aec1c0' }}>
        <Text style={styles.textStyle}>Parent- alignItems : flex-end, alignSelf : center</Text>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <View style={{ height: 40, width: 50, backgroundColor: 'indigo', }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkgreen', alignSelf: 'center', }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'maroon' }} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#99aead' }}>
        <Text style={styles.textStyle}>Parent- alignItems : center, alignSelf : flex-start</Text>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={{ height: 40, width: 50, backgroundColor: 'indigo', }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkgreen', alignSelf: 'flex-start', }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'maroon' }} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#aec1c0' }}>
        <Text style={styles.textStyle}>Parent- alignItems : flex-start, alignSelf : stretch</Text>
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
          <View style={{ height: 40, width: 50, backgroundColor: 'indigo', }} />
          <View style={{ height: 40, backgroundColor: 'darkgreen', alignSelf: 'stretch', }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'maroon' }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: 16,
    fontFamily: 'RobotoSlab-Medium',
    marginBottom: 4,
  }
});

export { AlignSelfExample };