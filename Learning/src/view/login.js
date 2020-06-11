//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';

// create a component
class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      selectedValue: '',
      togglestatus: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch('http://www.json-generator.com/api/json/get/crdgxGIHyq?indent=2')
      .then((res) => res.json())
      .then((resj) => {
        this.setState({items: resj});
        // console.warn('Success');
      })
      .catch((msg) => {
        console.log('Error');
      });
  }

  show = (value) => {
    this.setState({selectedValue: value});
  };

  forgotpasswordClick = () => {
    this.props.navigation.navigate('Profile');
    Toast.show('Forgot password click event.', Toast.LONG);
  };

  mapLearning = () => {
    const arra = [10, 20, 30, 40, 50];

    const objlist = [
      {name: 'amit', age: 12},
      {name: 'Rahul', age: 22},
      {name: 'Kumar', age: 32},
    ];

    objlist.map((value) => {
      console.warn(value.name);
    });
  };

  loginClickEvent = () => {
    const {email, password} = this.state;

    if (email.length == 0) {
      alert('Enter Email');
    } else if (password.length == 0) {
      alert('Enter Password');
    } else {
      fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'User 1',
        }),
      })
        .then((res) => {
          if (res.ok) {
            const res1 = res.json();
            // console.warn(res1)
            Toast.show('This is a long toast.', Toast.LONG);
            this.props.navigation.navigate('Home');
            //  alert('Success');
          } else {
            alert('Failed inside');
            console.log('Failed');
          }
        })
        .catch((message) => {
          alert('Failed inside');

          console.log('Somethng went wrong.');
        });
    }

    //  alert('Hi' + this.state.email + '/' + this.state.password);
  };

  render() {
    //get the data from splash screen ...use object destructing
    const {id} = this.props.route.params;
    //  const [selectedValue, setSelectedValue] = useState("java");
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => this.setState({email: text})}
          style={styles.textInputStyle}></TextInput>
        <TextInput
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
          style={styles.textInputStyle}></TextInput>

        <Picker
          style={styles.spinner}
          selectedValue={this.state.selectedValue}
          onValueChange={this.show.bind()}>
          {this.state.items.map((item, key) => (
            <Picker.Item label={item.name} value={item.name} key={key} />
          ))}
        </Picker>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => this.loginClickEvent()}>
          <Text style={{color: 'white', fontSize: 25}}> Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.forgot}
          onPress={() => {
            this.forgotpasswordClick();
          }}>
          <Text style={{color: 'red', fontSize: 15}}> Forgot password?</Text>
        </TouchableOpacity>

       
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
  },

  spinner: {
    fontSize: 20,
    margin: 0,
    width: '40%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  textInputStyle: {
    fontSize: 20,
    margin: 10,
    width: '90%',
    borderRadius: 10,
    padding: 10,
    borderColor: '#7a42f4',
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: '#000000',
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

  forgot: {
    margin: 20,
    height: 42,

    alignSelf: 'flex-end',
  },
});

//make this component available to the app
export default login;
