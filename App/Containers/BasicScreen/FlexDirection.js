import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FlexDirectionExample = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 1, backgroundColor: '#889cc9'}}>
        <Text style={styles.textStyle}>Example of flexDirection : row</Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{height: 50, width: 50, backgroundColor: 'rebeccapurple'}}
          />
          <View style={{height: 50, width: 50, backgroundColor: 'green'}} />
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: '#a0b2dd'}}>
        <Text style={styles.textStyle}>Example of flexDirection : Column</Text>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{height: 50, width: 50, backgroundColor: 'rebeccapurple'}}
          />
          <View style={{height: 50, width: 50, backgroundColor: 'green'}} />
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: '#889cc9'}}>
        <Text style={styles.textStyle}>
          Example of flexDirection : row-reverse
        </Text>
        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
          <View
            style={{height: 50, width: 50, backgroundColor: 'rebeccapurple'}}
          />
          <View style={{height: 50, width: 50, backgroundColor: 'green'}} />
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: '#a0b2dd'}}>
        <Text style={styles.textStyle}>
          Example of flexDirection : column-reverse
        </Text>
        <View style={{flex: 1, flexDirection: 'column-reverse'}}>
          <View
            style={{height: 50, width: 50, backgroundColor: 'rebeccapurple'}}
          />
          <View style={{height: 50, width: 50, backgroundColor: 'green'}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: 18,
    marginBottom: 4,
  },
});

export {FlexDirectionExample};
