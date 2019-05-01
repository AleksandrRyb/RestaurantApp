import React, { Component } from 'react';
import {  View,
          Text,
          StyleSheet,
          Button,
          TouchableOpacity,
          TouchableHighlight,
          TouchableWithoutFeedback,
          Image
         } from 'react-native';

import Stars from 'components/Stars';

export default class RestaurantRow extends Component {

  state = {
    showInfo: false
  }

  infoPressed = () => {
    // this.setState({ showInfo: !this.state.showInfo })
    this.props.navigation.navigate('Info', {
      restaurant: this.props.restaurant
    })
  }

    render() {
        const { restaurant, i } = this.props;
        return (
             <View key={i} style={[ {backgroundColor: i % 2 === 0 ? 'white' : '#f3f3f7'}]}>
                <View style={styles.row}>
                  <View style={styles.stars}>
                    <Stars rating={restaurant.rating} />
                  </View>
                  <View style={styles.address}>
                    <Text style={styles.addressText}>{restaurant.name}</Text>
                    <Text>{restaurant.address}</Text>
                  </View>
                  <View style={styles.edges}>
                    <TouchableHighlight 
                      onPress={this.infoPressed}
                      underlayColor='#5398DC'
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>Info</Text>
                    </TouchableHighlight>
                  </View>
                </View> 
                {
                  this.state.showInfo && 
                  <View style={styles.info}>
                    <Text>Restaurant Info</Text>
                    <Image 
                    source={{ 
                      // uri: `http://192.168.1.104:3000/images/${restaurant.image}`,
                    }}
                    style={{
                      flex: 1,
                      height: 100
                    }}
                    resizeMode="contain"
                    />
                  </View>
                }
              </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
    flexDirection: 'row'
  },
    edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    minWidth: 50
  },
  stars: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    minWidth: 50
  },
  address: {
    flexDirection: 'column',
    flex: 8
  },
  addressText: { color: '#000000' },
   input: {
     padding: 10,
     paddingHorizontal: 20,
     fontSize: 16,
     color: '#444',
     borderBottomWidth: 1,
     borderColor: '#DDD',
     backgroundColor: '#F5F5F5'
   },
   button: {
     borderWidth: 1,
     borderColor: '#0066CC',
     borderRadius: 14,
     paddingHorizontal: 10,
     paddingVertical: 3,
     backgroundColor: '#FFFFFF',
   },
   buttonText: {
     color: '#0066CC',
     fontSize: 12
   },
   info: {
     marginHorizontal: 40,
     marginVertical: 10,
     padding: 10,
     backgroundColor: '#FFF',
     borderWidth: 1,
     borderColor: '#DDD',
     borderRadius: 4
   }
})