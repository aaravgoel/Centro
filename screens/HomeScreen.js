import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fragment } from 'react/cjs/react.production.min';
//import listingsData from '../assets/data/listingsData';

export default function HomeScreen({ navigation }) {
  return (
    <Fragment>
    <SafeAreaView style={{ flex:0, backgroundColor: 'white' }} />
      <SafeAreaView style={styles.container}>
        <View style={styles.headerWrapper}>
          <Image source={require('../assets/Centro.png')} style={styles.profileImage}/>
          <Ionicons name="ios-menu-outline" size = {30} onPress={() => navigation.navigate('Settings')}/>
        </View>

        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
  profileImage: {
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