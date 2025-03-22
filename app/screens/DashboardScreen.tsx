import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const DashboardScreen = ({ navigation }: any) => {
  const username = 'User'; // Placeholder for actual username from auth context

  const handleLogout = () => {
    // Perform logout logic (e.g., clear tokens, navigate to Login)
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username}!</Text>
      <Button title="View Payments" onPress={() => navigation.navigate('PaymentScreen')} />
      <Button title="Analyze Spending" onPress={() => navigation.navigate('AnalyticsScreen')} />
      <Button title="Manage Categories" onPress={() => navigation.navigate('CategoryScreen')} />
      <Button title="Profile" onPress={() => navigation.navigate('ProfileScreen')} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default DashboardScreen;