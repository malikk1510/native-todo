import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainPage from './src/pages/main page/main';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/pages/login/login';
import Signup from './src/pages/signup/signup';
import ForgotPassword from './src/pages/forgot/Forgot-password';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import HomePageAfterLogin from './src/pages/home/Home-page';

const Stack = createStackNavigator();
const InnerStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const InnerDashboard1 = ({navigation}) => {
  return (
    <View>
      <Text>iner das1</Text>
    </View>
  );
};

function HomePageAfterLoginScreen({navigation}) {
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen
        name="HomePage"
        options={{
          title: 'HomePage',
          
          headerRight: () => (
            <Icon
              name="md-menu"
              type="Ionicons"
              size={25}
              style={{padding: 5}}
              // backgroundColor="#550CCF"
              onPress={() => navigation.openDrawer()}></Icon>
          ),
        }}
        component={HomePageAfterLogin}
      />
    </InnerStack.Navigator>
  );
}


function InnerDashboardScreen1({navigation}) {
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen
        name="InnerDashboard1"
        options={{
          title: 'InnerDashboard1',
          headerRight: () => (
            <Icon
              name="md-menu"
              type="Ionicons"
              style={{padding: 5}}
              size={25}
              // backgroundColor="#550CCF"
              onPress={() => navigation.openDrawer()}></Icon>
          ),
         
        }}
        component={InnerDashboard1}
      />
    </InnerStack.Navigator>
  );
}

function InnerDrawer() {
  return (
    <Drawer.Navigator
      backBehavior="order"
      overlayColor={0.5}
      drawerPosition="right"
      initialRouteName="HomePage">
      <Drawer.Screen name="HomePage" component={HomePageAfterLoginScreen} />
      <Drawer.Screen name="InnerDashboard1" component={InnerDashboardScreen1} />
    </Drawer.Navigator>
  );
}

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode>
        <Stack.Screen
          name="Home" //route
          component={MainPage}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot-password" component={ForgotPassword} />
        <Stack.Screen name="HomePage" component={InnerDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
