import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, Pressable} from 'react-native';

const MainPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{padding: 5}}>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2017/02/27/15/39/todo-2103511_960_720.png',
          }}
          resizeMode="contain"
        />
      </View>
      <View style={{padding: 5}}>
        <Text style={{fontSize: 18, color: '#550CCF', fontWeight: 'bold'}}>
          Todo App
        </Text>
      </View>
      <View style={{padding: 5, width: '100%'}}>
        <Text style={{textAlign: 'center'}}>
          The easiest way to start with your amazing applicaiton.
        </Text>
      </View>
      <View style={{padding: 5, width: '100%'}}>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: '#550CCF',
              padding: 10,
              width: '100%',
              borderRadius: 5,
            },
          ]}
          onPress={() => navigation.navigate('Login')}
          android_ripple={{color: 'white'}}>
          {({pressed}) => (
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              LOGIN
            </Text>
          )}
        </Pressable>
      </View>
      <View style={{padding: 5, width: '100%'}}>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: '#550CCF',
              // borderWidth: pressed ? 1 : 0,
              // borderStyle: 'solid',
              // borderColor: 'darkgray',
              padding: 10,
              width: '100%',
              borderRadius: 5,
            },
          ]}
          onPress={() => navigation.navigate('Signup')}
          android_ripple={{color: 'white'}}>
          {({pressed}) => (
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              SIGNUP
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default MainPage;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'lightgreen',
    padding:5
  },
});
