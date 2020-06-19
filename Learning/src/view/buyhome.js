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
let arra = [];
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
      indexCheckedPropertyType: '0',
      indexCheckedBathroom: '0',
      indexCheckedOffers: '0',
      indexCheckedFacilities: '0',
      minvalue: 0,
      maxvalue: 0,
      indexCheckedAmenities: 0,
      indexCheckedAmenitiesName: '',
      indexCheckedFurnishedName: '',
      indexCheckedOffersName: '',
      indexCheckedFacilitiessName: '',
      switch1Value: false,
      itemclickFurnished: -1,
      multiSelectionArray: [],

      facilities_array: [
        {
          id: '4',
          name: 'Hospital',
        },
        {
          id: '5',
          name: 'Beach',
        },
        {
          id: '6',
          name: 'Airport',
        },
        {
          id: '7',
          name: 'CityCenter',
        },
        {
          id: '8',
          name: 'School',
        },
      ],

      Offers_array: [
        {
          id: '1',
          name: '1 month Free',
        },
        {
          id: '2',
          name: '2 months Free',
        },
        {
          id: '3',
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

  saveItemClick = () => {
    let parkingSelect = '';
    if (this.state.switch1Value == true) {
      parkingSelect = 'Parking ON';
    } else {
      parkingSelect = 'Parking OFF';
    }

    alert(
      'Saved item =' +
        this.state.indexCheckedPropertyType +
        '::::::' +
        this.state.indexChecked +
        '::::::' +
        this.state.indexCheckedBathroom +
        '::::::' +
        this.state.indexCheckedAmenitiesName +
        '::::::' +
        this.state.indexCheckedFurnishedName +
        '::::::' +
        this.state.indexCheckedOffersName +
        '::::::' +
        this.state.indexCheckedFacilitiessName +
        '::::::' +
        parkingSelect +
        '::::::' +
        'Price Range Min=' +
        this.state.minvalue +
        '- MAx=' +
        this.state.maxvalue,
    );
  };

  renderItem = ({item}) => {
    return (
      //   <TouchableOpacity
      //     style={styles.button}
      //     onPress={() => this.itemClick(item)}>
      <TouchableOpacity
        onPress={() => this.setState({indexCheckedPropertyType: item.name})}>
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

            {this.state.indexCheckedPropertyType === item.name && (
              <Image
                source={iconChecked}
                style={styles.iconChecked}
                width="30%"
              />
            )}
          </View>
        </Card>
      </TouchableOpacity>
    );
  };

  renderItemAmenities = ({item}) => {
    return (
      //   <TouchableOpacity
      //     style={styles.button}
      //     onPress={() => this.itemClick(item)}>
      <TouchableOpacity
        onPress={() => {
          this.setState({indexCheckedAmenities: item.age});
          this.setState({indexCheckedAmenitiesName: item.name});
        }}>
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

            {this.state.indexCheckedAmenities === item.age && (
              <Image
                source={iconChecked}
                style={styles.iconChecked}
                width="30%"
              />
            )}
          </View>
        </Card>
      </TouchableOpacity>
    );
  };

  renderItemOffers = ({item}) => {
    return (
      //   <TouchableOpacity
      //     style={styles.button}
      //     onPress={() => this.itemClick(item)}>
      <TouchableOpacity
        onPress={() => {
          this.setState({indexCheckedOffers: item.id});
          this.setState({indexCheckedOffersName: item.name});
        }}>
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

          {this.state.indexCheckedOffers === item.id && (
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

  renderItemFacilities = ({item}) => {
    return (
      //   <TouchableOpacity
      //     style={styles.button}
      //     onPress={() => this.itemClick(item)}>
      <TouchableOpacity
        onPress={() => {
          this.setState({indexCheckedFacilities: item.id});
          this.setState({indexCheckedFacilitiessName: item.name});
        }}>
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

          {this.state.indexCheckedFacilities === item.id && (
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
        onPress={() => {
          this.setState({indexChecked: item.Count});
          const index = arra.indexOf(item.Count);
          if (index > -1) {
            arra.splice(index, 1);
          } else {
            arra.push(item.Count);
          }
          //console.warn(arra + '');
          this.setState({multiSelectionArray: arra});
        }}>
        <Card
          style={{
            padding: 10,
            margin: 10,
            width: 50,
            backgroundColor:  '#ffffff',
            alignItems: 'center',
            alignSelf: 'baseline',
            flexDirection: 'column',
          }}>
          <Text style={{fontSize: 22}}>{item.Count}</Text>
          {arra.indexOf(item.Count) > -1 == true && (
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

  renderItemBathroom = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.setState({indexCheckedBathroom: item.Count})}>
        <Card
          style={{
            padding: 10,
            margin: 10,
            width: 50,
            backgroundColor: this.state.selected ? '#6e3b6e' : '#ffffff',
            alignItems: 'center',
            alignSelf: 'baseline',
            flexDirection: 'column',
          }}>
          <Text style={{fontSize: 22}}>{item.Count}</Text>
          {this.state.indexCheckedBathroom === item.Count && (
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
        <Text style={{fontSize: 20, margin: 10}}>Property Type</Text>
        <FlatList
          style={{alignSelf: 'baseline'}}
          data={this.state.datasouce}
          renderItem={this.renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.age}
        />
        <Text style={{fontSize: 20, margin: 10}}>No. of Bedroom</Text>
        <FlatList
          data={this.state.datasouceBedroom}
          renderItem={this.renderItemBedroom}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
        <Text style={{fontSize: 20, margin: 10}}>No. of Bathroom</Text>
        <FlatList
          data={this.state.datasouceBedroom}
          renderItem={this.renderItemBathroom}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
        <Text style={{fontSize: 20, margin: 10}}>Price Range</Text>
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
            this.setState({maxvalue: max});
          }}
        />

        <View flexDirection="row" justifyContent="space-between">
          <Text style={{fontSize: 20, margin: 5}}>Property Size</Text>
          <Text style={{fontSize: 20, margin: 5}}>Sqrt</Text>
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
            // this.setState({minvalue: min}); //Same for max
          }}
        />
        <Text style={{fontSize: 20, margin: 10}}>Amenities</Text>
        <FlatGrid
          itemDimension={130}
          data={this.state.aminities_array}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={0}
          keyExtractor={(item) => item.age}
          renderItem={this.renderItemAmenities}
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

        <Text style={{fontSize: 20, margin: 10}}>Furnished</Text>

        <View
          style={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => {
              this.setState({itemclickFurnished: 0});
              this.setState({indexCheckedFurnishedName: 'Fully Furnished'});
            }}>
            <Card
              style={{
                padding: 10,
                margin: 1,
                alignItems: 'center',
                backgroundColor: '#ffffff',
              }}>
              <Text style={{fontSize: 12}}>Fully Furnished</Text>

              {this.state.itemclickFurnished === 0 && (
                <Image
                  source={iconChecked}
                  style={styles.iconChecked}
                  width="30%"
                />
              )}
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({itemclickFurnished: 1});
              this.setState({indexCheckedFurnishedName: 'Semi Furnished'});
            }}>
            <Card
              style={{
                padding: 10,
                margin: 1,
                alignItems: 'center',
                backgroundColor: '#ffffff',
              }}>
              <Text style={{fontSize: 12}}>Semi Furnished</Text>
              {this.state.itemclickFurnished === 1 && (
                <Image
                  source={iconChecked}
                  style={styles.iconChecked}
                  width="30%"
                />
              )}
            </Card>
          </TouchableOpacity>
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

        <Text style={{fontSize: 20, margin: 10}}>Offers</Text>

        <FlatGrid
          itemDimension={130}
          data={this.state.Offers_array}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={0}
          keyExtractor={(item) => item.id}
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
          keyExtractor={(item) => item.id}
          renderItem={this.renderItemFacilities}
        />
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => this.saveItemClick()}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {' '}
            save
          </Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignSelf: 'center',
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
  touchable: {
    backgroundColor: 'red',
    margin: 10,
    height: 42,
    width: '80%',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
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
