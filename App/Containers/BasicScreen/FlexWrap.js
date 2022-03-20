import React from 'react';
import { StyleSheet, View, Text } from "react-native";

const FlexWrapExample = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1, backgroundColor:'#99aead'  }}>
        <Text style={styles.textStyle}>flexDirection: 'row', flexWrap : 'nowrap'</Text>
        <View style={{ flex:1, flexDirection: 'row', flexWrap:'nowrap'}}>
          <View style={{ height: 40, width: 50, backgroundColor: 'darkgoldenrod' }} />
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

      <View style={{ flex: 1, backgroundColor:'#c4cdc1'  }}>
        <Text style={styles.textStyle}>flexDirection: 'row', flexWrap : 'wrap'</Text>
        <View style={{ flex:1, flexDirection: 'row', flexWrap:'wrap'}}>
          <View style={{ height: 40, width: 50, backgroundColor: 'darkgoldenrod' }} />
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

      <View style={{ flex: 1, backgroundColor:'#99aead'  }}>
        <Text style={styles.textStyle}>flexDirection: 'column', flexWrap : 'nowrap'</Text>
        <View style={{ flexDirection: 'column', flexWrap:'nowrap', }}>
        <View style={{ height: 40, width: 50, backgroundColor: 'darkgoldenrod' }} />
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

      <View style={{ flex: 1, backgroundColor:'#c4cdc1'  }}>
        <Text style={styles.textStyle}>flexDirection: 'column', flexWrap : 'wrap'</Text>
        <View style={{ flex:1, flexDirection: 'column', flexWrap:'wrap'}}>
          <View style={{ height: 40, width: 50, backgroundColor: 'darkgoldenrod' }} />
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
      
      <View style={{ flex: 1, backgroundColor:'#99aead'  }}>
        <Text style={styles.textStyle}>flexDirection: 'row', flexWrap : 'wrap-reverse'</Text>
        <View style={{ flexDirection: 'row', flexWrap:'wrap-reverse', }}>
          <View style={{ height: 40, width: 50, backgroundColor: 'darkgoldenrod' }} />
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

export { FlexWrapExample };