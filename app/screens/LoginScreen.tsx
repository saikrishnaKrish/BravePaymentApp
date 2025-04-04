import React, { useState, useContext } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { login } from '../api/auth';
import { AuthContext } from '../contexts/AuthContext';

const LoginScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login: setAuthUser } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await login(username, password);
      setAuthUser(username, "user@example.com"); // Mock email for now
      Alert.alert('Success', 'Login successful');
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert('Error', error as string);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input placeholder="Username" value={username} onChangeText={setUsername} />
      <Input placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Sign up
      </Text>
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
  },
  link: {
    marginTop: 20,
    color: '#007bff',
    textAlign: 'center',
  },
});

export default LoginScreen;
