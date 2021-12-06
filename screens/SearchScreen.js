import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fragment } from 'react/cjs/react.production.min';
//import listingsData from '../assets/data/listingsData';

export default function SearchScreen({ navigation }) {
  return (
    <Fragment>
    <SafeAreaView style={{ flex:0, backgroundColor: 'white' }} />
      <SafeAreaView style={styles.container}>
        <View style={styles.headerWrapper}>
          <Image source={require('../assets/images/Centro.png')} style={styles.headerImage}/>
          <Ionicons name="ios-menu-outline" size = {30} color = {'grey'} onPress={() => navigation.navigate('Settings')}/>
        </View>

        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            Search!
          </Text>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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