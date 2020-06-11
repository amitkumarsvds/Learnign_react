//import liraries
import React, {Component} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

// create a component

SwtichUtils = (props) => {
  return (
    <View style={styles.container}>
      <Switch onValueChange={props.toggleSwitch1} 
      
      value={props.switch1Value} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom:30,
  },
});

//make this component available to the app
export default SwtichUtils;
