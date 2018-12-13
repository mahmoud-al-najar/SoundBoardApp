import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class GridPanel extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
          <View style={styles.gridContainer}>
            <View style={styles.box}>
            </View>
            <View style={styles.box}>
            </View>
            <View style={styles.box}>
            </View>
            <View style={styles.box}>
            </View>
            <View style={styles.box}>
            </View>
            <View style={styles.box}>
            </View>
            <View style={styles.box}>
            </View>
            <View style={styles.box}>
            </View>
            
          </View>
		);
    }
}

const styles = StyleSheet.create({
    gridContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  box : {
    backgroundColor : 'red',
    height: 140,
    margin: 10,
    width: 140
  }
});

export default GridPanel;
