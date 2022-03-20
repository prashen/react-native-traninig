import React from 'react';
import { StyleSheet, View, Text } from "react-native";

const AlignItemsExample = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1, backgroundColor:'#99aead' }}>
        <Text style={styles.textStyle}>flexDirection : row, alignItems : flex-start</Text>
        <View style={{ flexDirection: 'row', alignItems:'flex-start', }}>
          <View style={{ height: 40, width: 50, backgroundColor: 'indigo' }} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor:'#aec1c0'}}>
        <Text style={styles.textStyle}>flexDirection : row, alignItems : flex-end</Text>
        <View style={{ flex: 1,flexDirection: 'row', alignItems:'flex-end' }}>
          <View style={{ height: 40, width: 50, backgroundColor: 'indigo' }} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor:'#99aead'}}>
        <Text style={styles.textStyle}>flexDirection : column, alignItems : flex-end</Text>
        <View style={{ flex: 1,flexDirection: 'column', alignItems:'flex-end' }}>
          <View style={{ height: 40, width: 50, backgroundColor: 'indigo' }} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor:'#aec1c0' }}>
        <Text style={styles.textStyle}>flexDirection : row, alignItems : center</Text>
        <View style={{ flex: 1, flexDirection: 'row', alignItems:'center' }}>
          <View style={{ height: 40, width: 50, backgroundColor: 'indigo' }} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor:'#99aead' }}>
        <Text style={styles.textStyle}>flexDirection : column, alignItems : center</Text>
        <View style={{ flex: 1, flexDirection: 'column', alignItems:'center' }}>
          <View style={{ height: 40, width: 50, backgroundColor: 'indigo' }} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor:'#aec1c0' }}>
        <Text style={styles.textStyle}>flexDirection : row, alignItems : stretch </Text>
        <View style={{flex:1, flexDirection: 'column', alignItems : 'stretch' }}>
          <View style={{ height: 40, backgroundColor: 'indigo' }} />
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
    fontFamily:'RobotoSlab-Medium',
    marginBottom: 4,
  }
});

export { AlignItemsExample };