// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/Components/Home/Welcome';
import Login from './src/Auth/Login';
import Signup from './src/Auth/Signup';
import Dashboard from './src/Components/Screen/Dashboard';
import BackButton from './src/Components/ReusableCom/BuckButton';
import Home from './src/Components/Screen/NavigationScreen/Home';
import Notification from './src/Components/Screen/NavigationScreen/Notification';
import Chat from './src/Components/Screen/NavigationScreen/Chat';
import Setting from './src/Components/Screen/NavigationScreen/Setting';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Dashboard',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        />
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        /> 
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            title: 'Notification',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            title: 'Chat',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            title: 'Setting',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;