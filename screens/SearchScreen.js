import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, SearchBar, useState } from 'react-native';
import { Fragment } from 'react/cjs/react.production.min';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchScreen({ navigation }) {

  return (
    <Fragment>
    <SafeAreaView backgroundColor='white' />
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image source={require('../assets/images/Centro.png')} style={styles.headerImage}/>
          <Ionicons name="ios-menu-outline" size = {30} color = {'grey'} onPress={() => navigation.navigate('Settings')}/>
        </View>

        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            
          </Text>
        </ScrollView>
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
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },
});