// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack />;
// }



import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';
import PaymentScreen from './screens/PaymentScreen';

import AnalyticsScreen from './screens/AnalyticsScreen';
import CategoryScreen from './screens/CategoryScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="AnalyticsScreen" component={AnalyticsScreen} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>

  );
};

export default App;
