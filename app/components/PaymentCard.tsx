// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// interface PaymentCardProps {
//   amount: number;
//   category: string;
//   date: string;
//   children?: React.ReactNode; // Ensure it accepts children
// }

// const PaymentCard: React.FC<PaymentCardProps> = ({ amount, category, date, children }) => {
//   return (
//     <View style={styles.card}>
//       <Text>Amount: ${amount}</Text>
//       <Text>Category: {category}</Text>
//       <Text>Date: {date}</Text>
//       {children}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     padding: 16,
//     backgroundColor: '#fff',
//     marginBottom: 16,
//     borderRadius: 8,
//     elevation: 3,
//   },
// });

// export default PaymentCard;


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PaymentCardProps {
  amount: number;
  category: string;
  date: string;
  onCategoryChange: (newCategory: string) => void;
  categories: string[];
  children?: React.ReactNode;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ amount, category, date, onCategoryChange, categories,children }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category);

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
    setIsEditing(false);
    onCategoryChange(newCategory)
  };

  return (
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Text style={styles.label}>
          Amount: <Text style={styles.value}>${amount}</Text>
        </Text>
        <Text style={styles.label}>
          Date: <Text style={styles.value}>{date}</Text>
        </Text> 
        <Text style={styles.label}>
        Category:  <Text style={styles.value}>{category}</Text>
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.categoryRow}>
          {isEditing ? (
            <View style={styles.dropdownContainer}>
              {categories?.map((cat) => (
                <TouchableOpacity key={cat} onPress={() => handleCategoryChange(cat)}>
                  <Text style={styles.categoryOption}>{cat} </Text>
                </TouchableOpacity>
              ))}
              <Text style={styles.value}>{date}</Text>
            </View>
          ) : (
            <>
              <TouchableOpacity onPress={() => setIsEditing(true)}>
                <Ionicons name="create-outline" size={20} color="#007bff" style={styles.icon} />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 8,
  },
  value: {
    color: '#000',
  },
  icon: {
    marginLeft: 10,
  },
  dropdownContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  categoryOption: {
    padding: 8,
    color: '#007bff',
  },
});

export default PaymentCard;
