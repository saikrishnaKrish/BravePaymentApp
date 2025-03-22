import React, { useState, useContext } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { AuthContext } from '../contexts/AuthContext';

const SignupScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signup } = useContext(AuthContext);

  const handleSignup = async () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    try {
      const message = await signup(username, email, password);
      Alert.alert('Success', message);
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', error as string);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Input placeholder="Username" value={username} onChangeText={setUsername} />
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />
      <Input placeholder="Confirm Password" value={confirmPassword} secureTextEntry onChangeText={setConfirmPassword} />
      <Button title="Sign Up" onPress={handleSignup} />
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
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

export default SignupScreen;