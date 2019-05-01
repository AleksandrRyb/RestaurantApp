import React, { Component } from 'react';
import { 
  View, 
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Stars from 'components/Stars';

export default class RestaurantInfo extends Component {

  static navigationOptions = {
    title: 'Restaurant Info'
  }

  addReview = () => {
    this.props.navigation.navigate('AddReview');
  }

  render() {
    const restaurant = this.props.navigation.getParam('restaurant')
    
    return (
     <ScrollView style={styles.root}>
      <View style={styles.infoHeader}>
        <Image
          source={{
              // uri: `http://ip address or localhost for xcode/images/${restaurant.image}`
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.info}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.address}>{restaurant.address}</Text>
          <Stars rating={restaurant.rating} />
          <TouchableOpacity 
            style={styles.button}
            onPress={this.addReview}
          >
            <Text style={styles.buttonText}>Add Review</Text>
          </TouchableOpacity>
        </View>
      </View>
     </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  infoHeader: {
    flexDirection: 'row'
  },
  info: {
    marginTop: 20
  },
  name: {
    fontSize: 24
  },
  address: {
    color: 'grey',
    marginBottom: 5
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#FFFFFF',
    marginTop: 5
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12,
    textAlign: 'center'
  }
});
