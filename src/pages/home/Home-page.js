import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomePageAfterLogin = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Text>HomePageAfterLogin</Text>
      </View>
      <View style={styles.fixedView}>
        <Icon style={styles.fab}size={10}  name="search" />
      </View>
    </>
  );
};

export default HomePageAfterLogin;
const styles = StyleSheet.create({
  fixedView: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    color:"black"
  },
  fab: {
    marginRight: 2,
    marginBottom: 3,
  },
});
