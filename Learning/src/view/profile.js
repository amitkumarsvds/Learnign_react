//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SwtichUtils from '../common/swtichutils';
import DatePicker from 'react-native-datepicker';
// create a component
class profile extends Component {
  constructor() {
    super();
    this.state = {
      switch1Value: false,
      date: '15-05-2018',
    };
  }
  toggleSwitch1 = (value) => {
    this.setState({switch1Value: value});
    console.log('Switch 1 is: ' + value);
  };
  render() {
    return (
      <View style={styles.container}>
        <SwtichUtils
          toggleSwitch1={this.toggleSwitch1}
          switch1Value={this.state.switch1Value}
        />
        <DatePicker
          style={{width: 300}}
          useNativeDriver={false}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            this.setState({date: date});
          }}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      marginTop: 50,
      padding:16
   }
});

//make this component available to the app
export default profile;
