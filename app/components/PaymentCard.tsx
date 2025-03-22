// // components/PaymentCard.tsx
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// interface PaymentCardProps {
//   amount: number;
//   category: string;
//   date: string;
//   children:any
// }

// const PaymentCard: React.FC<PaymentCardProps> = ({ amount, category, date, children }) => {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.text}>Amount: ${amount}</Text>
//       <Text style={styles.text}>Category: {category}</Text>
//       <Text style={styles.text}>Date: {date}</Text>
//       {children}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     padding: 16,
//     marginVertical: 8,
//     borderRadius: 8,
//     elevation: 4,
//     shadowColor: '#000',
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 4,
//   },
// });

// export default PaymentCard;


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PaymentCardProps {
  amount: number;
  category: string;
  date: string;
  children?: React.ReactNode;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ amount, category, date, children }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Amount: ${amount}</Text>
      <Text style={styles.text}>Category: {category}</Text>
      <Text style={styles.text}>Date: {date}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default PaymentCard;