import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  Switch,
} from 'react-native';

const Signup = ({navigation}) => {
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const [showPassword, setshowPassword] = useState(true);
  const onNameChangeText = val => {
    setAuthData({...authData, ['name']: val});
  };

  const onEmailChangeText = val => {
    setAuthData({...authData, ['email']: val});
  };

  const onPasswordChangeText = val => {
    setAuthData({...authData, ['password']: val});
  };
  const toggleSwitch = () => {
    console.log('call');
    setshowPassword(!showPassword);
  };
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
          Create Account
        </Text>
      </View>
      <View style={{padding: 5, width: '100%'}}>
        <TextInput
          style={styles.input}
          onChangeText={onNameChangeText}
          value={authData?.name}
          keyboardType="default" // onChangeText={onChangeText}
          placeholder="Name"
        />
      </View>
      <View style={{padding: 5, width: '100%'}}>
        <TextInput
          style={styles.input}
          onChangeText={onEmailChangeText}
          value={authData?.email}
          keyboardType="email-address"
          placeholder="Email"
        />
      </View>
      <View style={{padding: 5, width: '100%'}}>
        <TextInput
          style={styles.input}
          onChangeText={onPasswordChangeText}
          value={authData?.password}
          secureTextEntry={showPassword}
          placeholder="Password"
        />
        <Switch onValueChange={toggleSwitch} value={showPassword} />
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
              SIGNUP
            </Text>
          )}
        </Pressable>
      </View>
      <View style={{padding: 5, width: '100%'}}>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize: 14,
            // fontWeight: 'bold',
          }}>
          Already have an account?{' '}
          <Text
            onPress={() => navigation.navigate('Login')}
            style={{
              // textAlign: 'center',
              color: '#550CCF',
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;
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
