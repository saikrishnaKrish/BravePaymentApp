import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onLogout }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {onLogout && (
        <TouchableOpacity onPress={onLogout}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#007bff',
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  logout: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Header;