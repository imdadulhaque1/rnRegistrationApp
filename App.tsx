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
import GreetingsDashboard from './src/Components/Screen/Greetings/GreetingsDashboard';
import AllGreetings from './src/Components/Screen/Greetings/greetingsFeatures/AllGreetings';
import CreateGreetings from './src/Components/Screen/Greetings/greetingsFeatures/CreateGreetings';


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
        <Stack.Screen
          name="GreetingsDashboard"
          component={GreetingsDashboard}
          options={{
            title: 'Greetings Dashboard',
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
          name="AllGreetings"
          component={AllGreetings}
          options={{
            title: 'All Greetings',
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
          name="CreateGreetings"
          component={CreateGreetings}
          options={{
            title: 'Create Greetings',
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;