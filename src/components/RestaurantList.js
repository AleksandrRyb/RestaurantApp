 /**
 * Sample React Native RestaurantList
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  ScrollView,
  FlatList,
  Image
} from 'react-native';

import axios from 'axios';

// import HeaderStyle from './HeaderStyle';
import Header from 'components/Header';
import RestaurantRow from 'components/RestaurantRow';

import PizzaImage from 'images/pizza.png';


export default class RestaurantList extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    search: null,
    restaurants: []
  }

  componentDidMount() {
    // axios.get('http://ip address or localhost for xcode/restaurants')
      .then(result => this.setState({ restaurants: result.data }))
      .catch(error => console.error(error))
  }

  render() {
    console.log(this.state)
    // const headerStyle = Platform.select({
    //   ios: HeaderStyle.iOSHeader,
    //   android: HeaderStyle.header
    // })
    return (
      <View style={{
         flex: 1 ,
         backgroundColor: '#FFFFFF'
         }}>
            <View style={{
              marginTop: 30,
              alignItems: 'center'
            }}>
              <Image source={PizzaImage} />
            </View>
            <Header />
            <TextInput 
              style={styles.input}
              placeholder={'Live Search'}
              onChangeText={text => this.setState({ search: text })}
              value={this.state.search}
            />
          <FlatList
            data={
              this.state.restaurants.filter(place => {
                return !this.state.search || 
                  place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
                })
              }
            renderItem={({ item, index}) => 
              <RestaurantRow 
                restaurant={item} 
                i={index} 
                navigation={this.props.navigation}
              />
              }
            keyExtractor={item => item.name}
            initialNumberToRender={12}
          />
      </View>
    );
  }
};

const styles = StyleSheet.create({
   input: {
     padding: 10,
     paddingHorizontal: 20,
     fontSize: 16,
     color: '#444',
     borderBottomWidth: 1,
     borderColor: '#DDD',
     backgroundColor: '#F5F5F5'
   }
})