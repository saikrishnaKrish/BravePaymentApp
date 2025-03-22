import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

// Mock Data for Analytics
const mockAnalyticsData = [
  { name: 'Clothing', amount: 200, color: '#FF6384', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Travel', amount: 450, color: '#36A2EB', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Business', amount: 300, color: '#FFCE56', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Other', amount: 150, color: '#4BC0C0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
];

const AnalyticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spending Analytics</Text>
      <PieChart
        data={mockAnalyticsData}
        width={350}
        height={220}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor={'amount'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        absolute
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default AnalyticsScreen;