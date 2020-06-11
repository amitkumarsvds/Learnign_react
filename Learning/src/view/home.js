//import liraries
import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';

// create a component
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasouce: [],
    };
  }

  componentDidMount() {
    const URL =
      'http://www.json-generator.com/api/json/get/cqfQoSMGmq?indent=2';

    fetch(URL)
      .then((response) => response.json())
      .then((resjson) => {
        this.setState({datasouce: resjson.book_array});
      })
      .catch((error) => console.warn('Error in fetching data ' + error));
  }

  itemClick = (item) => {
    alert(item.age);
  };

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.itemClick(item)}>
        <View style={styles.item}>
          <Image
            style={{width: 60, height: 60, borderRadius: 60 / 2}}
            source={{uri: item.image}}></Image>

          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{marginLeft: 20}}>
                <Text style={styles.title}>{item.name}</Text>
              </View>
              <View style={{marginLeft: 20}}>
                <Text style={styles.title}>Bangalore</Text>
              </View>
            </View>

            <View style={{marginLeft: 20, marginTop: 10}}>
              <Text style={{fontSize: 20, color: 'grey'}}>{item.age}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          style={styles.container}
          data={this.state.datasouce}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.age}
        />
      </SafeAreaView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: '100%',
    marginTop: 10,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
  },
});

//make this component available to the app
export default home;
