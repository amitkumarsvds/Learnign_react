//import liraries
import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import {Card} from 'react-native-shadow-cards';
const iconChecked = require('../images/checked.png');
import RangeSlider from 'rn-range-slider';
import {ScrollView} from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';
import SwtichUtils from '../common/swtichutils';

// create a component
class buyhome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasouce: [],
      datasouceBedroom: [],
      selected: false,
      flag: false,
      indexChecked: '0',
      minvalue: 0,
      switch1Value: false,

      facilities_array: [
        {
          name: 'Hospital',
        },
        {
          name: 'Beach',
        },
        {
          name: 'Airport',
        },
        {
          name: 'CityCenter',
        },
        {
          name: 'School',
        },
      ],

      Offers_array: [
        {
          name: '1 month Free',
        },
        {
          name: '2 months Free',
        },
        {
          name: 'Chiller free',
        },
      ],

      aminities_array: [
        {
          age: 28,
          image: 'https://tinyjpg.com/images/social/website.jpg',
          name: 'Air Conditioner',
        },
        {
          age: 33,
          image: 'https://tinyjpg.com/images/social/website.jpg',
          name: 'Washer & dryer',
        },
        {
          age: 34,
          image: 'https://tinyjpg.com/images/social/website.jpg',
          name: 'Swimming Pool',
        },
        {
          age: 35,
          image: 'https://tinyjpg.com/images/social/website.jpg',
          name: 'Gym',
        },
        {
          age: 36,
          image: 'https://tinyjpg.com/images/social/website.jpg',
          name: 'Wadrobe',
        },
      ],
    };
  }
  toggleSwitch1 = (value) => {
    this.setState({switch1Value: value});
    console.log('Switch 1 is: ' + value);
  };
  componentDidMount() {
    const URL =
      'http://www.json-generator.com/api/json/get/bZxTflLXTm?indent=2';

    fetch(URL)
      .then((response) => response.json())
      .then((resjson) => {
        this.setState({datasouce: resjson.book_array});
      })
      .catch((error) =>
        console.warn('Error in fetching data House== ' + error),
      );

    const URL1 =
      'http://www.json-generator.com/api/json/get/cfNDkLfPLS?indent=2';

    fetch(URL1)
      .then((response) => response.json())
      .then((resjson) => {
        this.setState({datasouceBedroom: resjson.book_array});
      })
      .catch((error) =>
        console.warn('Error in fetching data bedroom== ' + error),
      );
  }

  itemClick = (item) => {
    alert(item.age);
  };

  renderItem = ({item}) => {
    return (
      //   <TouchableOpacity
      //     style={styles.button}
      //     onPress={() => this.itemClick(item)}>

      <Card style={{margin: 5, width: 140, height: 140}}>
        <View
          style={{
            margin: 20,
            flexDirection: 'column',
          }}>
          <Image
            style={{
              width: 60,
              height: 60,
              margin: 10,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            source={{uri: item.image}}></Image>
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              fontSize: 12,
            }}>
            {item.name}
          </Text>
        </View>
      </Card>
    );
  };

  renderItemOffers = ({item}) => {
    return (
      //   <TouchableOpacity
      //     style={styles.button}
      //     onPress={() => this.itemClick(item)}>

      <Card
        style={{
          margin: 5,
          width: 120,
          height: 40,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            fontSize: 12,
          }}>
          {item.name}
        </Text>
      </Card>
    );
  };
  onPressItem = (item) => {
    if (this.state.flag == false) {
      this.setState({selected: true});
      this.setState({flag: true});
    } else {
      this.setState({selected: false});
      this.setState({flag: false});
    }
    Toast.show(item.Count + '', Toast.SHORT);

    //alert('Hi ' + item.Count);
  };
  renderItemBedroom = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.setState({indexChecked: item.Count})}>
        <Card
          style={{
            padding: 10,
            margin: 10,
            width: 50,
            backgroundColor: this.state.selected ? '#6e3b6e' : '#d3d3d3',
            alignItems: 'center',
            alignSelf: 'baseline',
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 22}}>{item.Count}</Text>
          {this.state.indexChecked === item.Count && (
            <Image
              source={iconChecked}
              style={styles.iconChecked}
              width="30%"
            />
          )}
        </Card>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize: 25, margin: 10}}>Property Type</Text>
        <FlatList
          style={{alignSelf: 'baseline'}}
          data={this.state.datasouce}
          renderItem={this.renderItem}
          horizontal={true}
          keyExtractor={(item) => item.age}
        />
        <Text style={{fontSize: 25, margin: 10}}>No. of Bedroom</Text>
        <FlatList
          data={this.state.datasouceBedroom}
          renderItem={this.renderItemBedroom}
          horizontal={true}
          keyExtractor={(item) => item.id}
        />
        <Text style={{fontSize: 25, margin: 10}}>No. of Bathroom</Text>
        <FlatList
          data={this.state.datasouceBedroom}
          renderItem={this.renderItemBedroom}
          horizontal={true}
          keyExtractor={(item) => item.id}
        />
        <Text style={{fontSize: 25, margin: 10}}>Price Range</Text>
        <RangeSlider
          style={{height: 80, margin: 10}}
          gravity={'center'}
          min={200}
          max={1000}
          step={20}
          selectionColor="#0929DF"
          blankColor="#d3d3d3"
          onValueChanged={(min, max) => {
            this.setState({minvalue: min}); //Same for max
          }}
        />

        <View flexDirection="row">
          <Text style={{fontSize: 25, margin: 10}}>Property Size</Text>
          <Text style={{fontSize: 25, margin: 10}}>Sqrt</Text>
        </View>

        <RangeSlider
          style={{height: 80, margin: 10}}
          gravity={'center'}
          min={1000}
          max={10000}
          step={20}
          selectionColor="#0929DF"
          blankColor="#d3d3d3"
          onValueChanged={(min, max) => {
            this.setState({minvalue: min}); //Same for max
          }}
        />
        <Text style={{fontSize: 25, margin: 10}}>Amenities</Text>
        <FlatGrid
          itemDimension={130}
          data={this.state.aminities_array}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={0}
          renderItem={this.renderItem}
        />

        <View
          flexDirection="row"
          justifyContent="space-between"
          style={{margin: 10}}>
          <Text style={{fontSize: 25, marginRight: 30}}>Parking</Text>
          <SwtichUtils
            toggleSwitch1={this.toggleSwitch1}
            switch1Value={this.state.switch1Value}
          />
        </View>

        <Text style={{fontSize: 25, margin: 10}}>Furnished</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Card
            style={{
              padding: 10,
              margin: 5,
              width: '40%',
              backgroundColor: '#ffffff',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 12}}>Fully Furnished</Text>
          </Card>

          <Card
            style={{
              padding: 10,
              margin: 5,
              width: '40%',
              backgroundColor: '#ffffff',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 12}}>Semi Furnished</Text>
          </Card>
        </View>

        <View
          flexDirection="row"
          justifyContent="space-between"
          style={{margin: 10}}>
          <Text style={{fontSize: 25, marginRight: 30}}>
            Inspected Properties
          </Text>
          <SwtichUtils
            toggleSwitch1={this.toggleSwitch1}
            switch1Value={this.state.switch1Value}
          />
        </View>

        <Text style={{fontSize: 25, margin: 10}}>Offers</Text>

        <FlatGrid
          itemDimension={130}
          data={this.state.Offers_array}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={0}
          renderItem={this.renderItemOffers}
        />

        <Text style={{fontSize: 25, margin: 10}}>Public Facilities</Text>

        <FlatGrid
          itemDimension={130}
          data={this.state.facilities_array}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={0}
          renderItem={this.renderItemOffers}
        />
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginTop: 10,
    height: '20%',
    margin: 10,
  },

  containerbedroom: {
    flex: 0,
    marginTop: 10,
    height: '20%',
    margin: 10,
  },

  SquareShapeView: {
    width: 120,
    height: 120,
    backgroundColor: '#00BCD4',
  },
  iconChecked: {
    marginRight: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  itembedroom: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    marginLeft: 8,
    marginRight: 8,
    flex: 1,
    flexDirection: 'column',
  },

  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: 'red',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

//make this component available to the app
export default buyhome;
