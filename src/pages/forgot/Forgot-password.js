import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
} from 'react-native';

const ForgotPassword = ({navigation}) => {
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
      <View style={{padding: 5, width: '100%'}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#550CCF',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Restore Password
        </Text>
      </View>
      <View style={{padding: 5, width: '100%'}}>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          // value={text}
          placeholder="E-mail address"
        />
      </View>
      <View style={{padding: 5, width: '100%'}}>
        <Text
          style={{
            color: 'gray',
            fontSize: 14,
            // fontWeight: 'bold',
          }}>
          Yow will receive email with password reset link{' '}
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
          // onPress={() => navigation.navigate('Login', {name: 'Jane'})}
          android_ripple={{color: 'white'}}>
          {({pressed}) => (
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              SEND INSTRUCTIONS
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default ForgotPassword;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    // backgroundColor: 'lightgreen',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingLeft: 12,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 15,
  },
});
