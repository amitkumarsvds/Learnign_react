//import liraries
import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

// create a component
class splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
      this.props.navigation.navigate('Seller');
    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeadstyle}>HEY, AMIT</Text>
        <Image
          source={require('../images/android.png')}
          style={{width: '50%', height: '50%', marginLeft: 10}}
        />
        <Text style={styles.textstyle}>.............</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  textstyle: {
    fontSize: 40,
    color: 'red',
  },
  textHeadstyle: {
    fontSize: 40,
    color: 'green',
  },
});

//make this component available to the app
export default splash;
