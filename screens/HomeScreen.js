import * as React from 'react';
import { StyleSheet, Text, Image, FlatList, View, SafeAreaView } from 'react-native';
import { Fragment } from 'react/cjs/react.production.min';

import Ionicons from 'react-native-vector-icons/Ionicons';

import listingsData from '../assets/data/listingsData';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

export default function HomeScreen({ navigation }) {

  const renderListingItem = ({ item }) => {
    return (
      <View style={styles.listingsItemWrapper}>
        <View style={styles.listingsItemSellerWrapper}>
          <Image source={item.sellerImage} style={styles.listingsItemSellerImage} />
          <Text style={styles.listingsItemSellerName}>{item.sellerName}</Text>
        </View>
        <Image source={item.image} style={styles.listingsItemImage} />
        <View style={styles.listingsActionsWrapper}>
          <Ionicons name="ios-heart-outline" size={25} style={styles.listingsActionsLikeIcon}/>
          <Ionicons name="ios-chatbubble-outline" size={25} style={styles.listingsActionsChatIcon}/>
          <Ionicons name="ios-bookmark-outline" size={25} style={styles.listingsActionsBookmark}/>
        </View>
        <Text style={styles.listingsItemDescription}>{item.description}</Text>
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
    marginBottom: 10,
  },
  listingsItemSellerWrapper: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listingsItemSellerImage: {
    width: 40,
    height: 40,
  },
  listingsItemSellerName: {
    marginLeft: 10,
    fontSize: 20,
  },
  listingsItemImage: {
    width: '100%',
  },
  listingsItemDescription: {
    marginLeft: 10,
    marginRight: 10,
  },
  listingsActionsWrapper: {
    flexDirection: 'row',
  },
  listingsActionsLikeIcon: {
    marginLeft: 7,
    margin: 5,
  },
  listingsActionsChatIcon: {
    margin: 5,
  },
  listingsActionsBookmark: {
    margin: 5,
  },
});