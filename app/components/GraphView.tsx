import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';

interface GraphViewProps {
  data: { category: string; amount: number }[];
}

const GraphView: React.FC<GraphViewProps> = ({ data }) => {
  const chartData = data.map((item) => ({ name: item.category, amount: item.amount }));

  return (
    <View>
      <Text style={styles.title}>Spending Analytics</Text>
      <BarChart
        data={{
          labels: chartData.map((item) => item.name),
          datasets: [{ data: chartData.map((item) => item.amount) }],
        }}
        width={350}
        height={220}
        yAxisLabel="$"
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: '#007bff',
          backgroundGradientFrom: '#007bff',
          backgroundGradientTo: '#0056b3',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default GraphView;
