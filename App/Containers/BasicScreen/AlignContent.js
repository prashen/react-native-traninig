import React from 'react';
import { StyleSheet, View, Text } from "react-native";

const AlignContentExample = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1, backgroundColor: '#99aead' }}>
        <Text style={styles.textStyle}>flexDirection : 'row', alignItems : 'flex-start'</Text>
        <View style={{ flex: 1, flexDirection: 'row', alignContent: 'flex-start', flexWrap: 'wrap' }}>
          <View style={{ height: 40, width: 50, backgroundColor: 'goldenrod' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'steelblue' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'green' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkmagenta' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkblue' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkred' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'lightseagreen' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'olive' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'teal' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkslategrey' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'thistle' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'dimgrey' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'palevioletred' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'indigo' }} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#aec1c0' }}>
        <Text style={styles.textStyle}>flexDirection : 'column', alignItems : 'center'</Text>
        <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', flexWrap: 'wrap' }}>
          <View style={{ height: 40, width: 50, backgroundColor: 'goldenrod' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'steelblue' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'green' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkmagenta' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkblue' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkred' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'lightseagreen' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'olive' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'teal' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkslategrey' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'thistle' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'dimgrey' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'palevioletred' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'indigo' }} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#99aead' }}>
        <Text style={styles.textStyle}>flexDirection : 'row', alignItems : 'space-between'</Text>
        <View style={{ flex: 1, flexDirection: 'row', alignContent: 'space-between', flexWrap: 'wrap' }}>
          <View style={{ height: 40, width: 50, backgroundColor: 'goldenrod' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'steelblue' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'green' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkmagenta' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkblue' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkred' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'lightseagreen' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'olive' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'teal' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkslategrey' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'thistle' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'dimgrey' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'palevioletred' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'indigo' }} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#aec1c0' }}>
        <Text style={styles.textStyle}>flexDirection : 'row', alignItems : 'space-around',</Text>
        <View style={{ flex: 1, flexDirection: 'row', alignContent: 'space-around', flexWrap: 'wrap' }}>
          <View style={{ height: 40, width: 50, backgroundColor: 'goldenrod' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'steelblue' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'green' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkmagenta' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkblue' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'darkred' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'lightseagreen' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'olive' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'teal' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'rosybrown' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'rebeccapurple' }} />
          <View style={{ height: 40, width: 50, backgroundColor: 'indianred' }} />
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

export { AlignContentExample };