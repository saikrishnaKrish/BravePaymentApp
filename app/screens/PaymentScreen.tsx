import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PaymentCard from '../components/PaymentCard';
import CategorySelector from '../components/CategorySelector';

// Mock Data
const mockPayments = [
  { id: '1', amount: 50, category: 'Clothing', date: '2025-03-01' },
  { id: '2', amount: 150, category: 'Travel', date: '2025-03-05' },
  { id: '3', amount: 200, category: 'Business', date: '2025-03-10' },
];

const initialCategories = ['Clothing', 'Travel', 'Business', 'Other'];

const PaymentScreen = () => {
  const [payments, setPayments] = useState(mockPayments);
  const [categories, setCategories] = useState(initialCategories);

  const handleCategoryChange = (id: string, newCategory: string) => {
    const updatedPayments = payments.map(payment =>
      payment.id === id ? { ...payment, category: newCategory } : payment
    );
    setPayments(updatedPayments);
  };

  const handleAddCategory = (category: string) => {
    if (category.trim() !== '' && !categories.includes(category)) {
      setCategories((prev) => [...prev, category]);
    }
  };
const renderPaymentItem = ({ item }: { item: typeof mockPayments[0] }) => (
  <PaymentCard
    amount={item.amount}
    category={item.category}
    date={item.date}
    categories={categories}
    onCategoryChange={(newCategory) => handleCategoryChange(item.id, newCategory)}
  >
    <CategorySelector
    categories={categories}
      selectedCategory={item.category}
      onCategoryChange={(newCategory) => handleCategoryChange(item.id, newCategory)}
      onAddCategory={handleAddCategory}
    />
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
