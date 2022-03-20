import React from 'react';
import { StyleSheet, View, Text } from "react-native";

const JustifyContentExample = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1, backgroundColor:'#889cc9' }}>
        <Text style={styles.textStyle}>Example of justifyContent : flex-start</Text>
        <View style={{ flexDirection: 'row', justifyContent:'flex-start' }}>
          <View style={{ height: 50, width: 50, backgroundColor: 'rebeccapurple' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'green' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'sienna' }} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor:'#a0b2dd'}}>
        <Text style={styles.textStyle}>Example of justifyContent : flex-end</Text>
        <View style={{ flexDirection: 'row', justifyContent:'flex-end' }}>
          <View style={{ height: 50, width: 50, backgroundColor: 'rebeccapurple' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'green' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'sienna' }} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor:'#889cc9' }}>
        <Text style={styles.textStyle}>Example of justifyContent : center</Text>
        <View style={{flex:1, flexDirection: 'row', justifyContent:'center' }}>
          <View style={{ height: 50, width: 50, backgroundColor: 'rebeccapurple' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'green' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'sienna' }} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor:'#a0b2dd' }}>
        <Text style={styles.textStyle}>Example of justifyContent : space-between</Text>
        <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between' }}>
          <View style={{ height: 50, width: 50, backgroundColor: 'rebeccapurple' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'green' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'sienna' }} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor:'#889cc9' }}>
        <Text style={styles.textStyle}>Example of justifyContent : space-around</Text>
        <View style={{flex:1, flexDirection: 'row', justifyContent:'space-around' }}>
          <View style={{ height: 50, width: 50, backgroundColor: 'rebeccapurple' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'green' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'sienna' }} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor:'#a0b2dd' }}>
        <Text style={styles.textStyle}>Example of justifyContent : space-evenly</Text>
        <View style={{flex:1, flexDirection: 'row', justifyContent:'space-evenly' }}>
          <View style={{ height: 50, width: 50, backgroundColor: 'rebeccapurple' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'green' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'sienna' }} />
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
    fontSize: 18,
    marginBottom: 4,
  }
});

export { JustifyContentExample };