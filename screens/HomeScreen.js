import * as React from 'react';
import { StyleSheet, Text, Image, FlatList, View, SafeAreaView, Pressable, TouchableOpacity} from 'react-native';
import { Fragment } from 'react/cjs/react.production.min';

import Ionicons from 'react-native-vector-icons/Ionicons';

import listingsData from '../assets/data/listingsData';

export default function HomeScreen({ navigation }) {

  const renderListingItem = ({ item }) => {
    let isLiked = false;
    let isBookmarked = false;

    return (
      <View style={styles.listingsItemWrapper}>
        <Image source={item.image} style={styles.listingsItemImage} />
        <View style={styles.listingsActionsWrapper}>
          <View flexDirection='row'>
            <Pressable>
              {({ pressed }) => {
                if(pressed) {
                  isLiked = !isLiked;
                }
                return <Ionicons name={isLiked ? 'ios-heart' : 'ios-heart-outline'} size={33} style={styles.listingsActionsIcons} />
              }}
            </Pressable>
            <Pressable>
              {({ pressed }) => {
                return <Ionicons name={pressed ? 'ios-chatbubble' : 'ios-chatbubble-outline'} size={30} style={styles.listingsActionsIcons} />
              }}
            </Pressable>
            <Pressable>
              {({ pressed }) => {
                return <Ionicons name={pressed ? 'ios-paper-plane' : 'ios-paper-plane-outline'} size={30} style={styles.listingsActionsIcons} />
              }}
            </Pressable>
          </View>
          <Pressable>
            {({ pressed }) => {
              if(pressed) {
                isBookmarked = !isBookmarked;
              }
              return <Ionicons name={isBookmarked ? 'ios-bookmark' : 'ios-bookmark-outline'} size={30} style={styles.listingsActionsIcons} />
            }}
          </Pressable>
        </View>
        <View flexDirection="row">
          <Text style={styles.listingsItemTitle}>{item.title}</Text>
          <Text style={styles.listingsItemPrice}>{'$' + item.price}</Text>
        </View>
        <Text style={styles.listingsItemDescription}>{ item.description}</Text>
        <View style={styles.listingsItemSellerWrapper}>
          <Image source={item.sellerImage} style={styles.listingsItemSellerImage} />
          <Text style={styles.listingsItemSellerName}>{item.sellerName}</Text>
        </View>
      </View>
    );
  };

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headerWrapper}>
          <Image source={require('../assets/images/Centro.png')} style={styles.headerImage} />
          <Ionicons name="ios-menu-outline" size={30} color={'grey'} onPress={() => navigation.navigate('Settings')} />
        </View>

        <FlatList data={listingsData} renderItem={renderListingItem} keyExtractor={item => item.id} showsHorizontalScrollIndicator={false} />
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerImage: {
    width: 120,
    height: 28,
  },
  listingsItemWrapper: {
    borderWidth: 2,
    borderColor: 'salmon',
    borderRadius: 32,
    margin: 10,
    backgroundColor: 'white',
    shadowOpacity: 0.2,
    shadowOffset: {height: 4},
  },
  listingsItemSellerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  listingsItemImage: {
    width: '100%',
    borderRadius: 30,
  },
  listingsActionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 3,
  },
  listingsActionsIcons: {
    color: 'salmon',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  listingsItemTitle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    fontSize: 30,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {height: 2},
  },
  listingsItemPrice: {
    marginRight: 10,
    marginBottom: 5,
    fontSize: 30,
    color: 'salmon',
    fontWeight: 'bold',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {height: 2},
  },
  listingsItemDescription: {
    marginLeft: 10,
    marginRight: 10,
  },
  listingsItemSellerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  listingsItemSellerName: {
    marginLeft: 10,
    fontSize: 20,
  },
});