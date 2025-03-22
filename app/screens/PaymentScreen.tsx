import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PaymentCard from '../components/PaymentCard';
import CategorySelector from '../components/CategorySelector';
import Button from '../components/Button';

// Mock Data
const mockPayments = [
  { id: '1', amount: 50, category: 'Clothing', date: '2025-03-01' },
  { id: '2', amount: 150, category: 'Travel', date: '2025-03-05' },
  { id: '3', amount: 200, category: 'Business', date: '2025-03-10' },
];

const PaymentScreen = () => {
  const [payments, setPayments] = useState(mockPayments);

  const handleCategoryChange = (id: string, newCategory: string) => {
    const updatedPayments = payments.map(payment =>
      payment.id === id ? { ...payment, category: newCategory } : payment
    );
    setPayments(updatedPayments);
  };

  const renderPaymentItem = ({ item }: { item: typeof mockPayments[0] }) => (
    <PaymentCard
      amount={item.amount}
      category={item.category}
      date={item.date}
    >
      <CategorySelector
              selectedCategory={item.category}
              onCategoryChange={(newCategory: string) => handleCategoryChange(item.id, newCategory)} categories={[]} onAddCategory={function (category: string): void {
                  throw new Error('Function not implemented.');
              } }      />
    </PaymentCard>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payments</Text>
      <FlatList
        data={payments}
        renderItem={renderPaymentItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default PaymentScreen;