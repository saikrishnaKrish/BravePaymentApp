

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// interface CategorySelectorProps {
//   categories: string[];
//   selectedCategory: string;
//   onCategoryChange: (category: string) => void;
//   onAddCategory: (category: string) => void;
// }

// const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, selectedCategory, onCategoryChange, onAddCategory }) => {
//   const [newCategory, setNewCategory] = useState('');

//   const handleAddCategory = () => {
//     if (newCategory.trim() !== '' && !categories.includes(newCategory)) {
//       onAddCategory(newCategory);
//       setNewCategory('');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Select Category:</Text>
//       <Picker
//         selectedValue={selectedCategory}
//         onValueChange={(itemValue) => onCategoryChange(itemValue)}
//       >
//         {categories.map((category) => (
//           <Picker.Item key={category} label={category} value={category} />
//         ))}
//       </Picker>

//       <TextInput
//         style={styles.input}
//         placeholder="Add New Category"
//         value={newCategory}
//         onChangeText={setNewCategory}
//       />
//       <Button title="Add Category" onPress={handleAddCategory} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 16,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 8,
//     paddingHorizontal: 10,
//   },
// });

// export default CategorySelector;

// // Application complete. Proceed with API integration and state management.


import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface CategorySelectorProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const initialCategories = ['Clothing', 'Travel', 'Business', 'Other'];

const CategorySelector: React.FC<CategorySelectorProps> = ({ selectedCategory, onCategoryChange }) => {
  const [categories, setCategories] = useState(initialCategories);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() !== '' && !categories.includes(newCategory)) {
      setCategories((prev) => [...prev, newCategory]);
      setNewCategory('');
    }
  };

  return (
    <View>
      <Picker selectedValue={selectedCategory} onValueChange={onCategoryChange}>
        {categories.map((category) => (
          <Picker.Item key={category} label={category} value={category} />
        ))}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Add New Category"
        value={newCategory}
        onChangeText={setNewCategory}
      />
      <Button title="Add Category" onPress={handleAddCategory} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
});

export default CategorySelector;

// Step 15: Set Up Mock API

// api/mockApi.ts
export const fetchMockPayments = async () => {
  return [
    { id: '1', amount: 50, category: 'Clothing', date: '2025-03-01' },
    { id: '2', amount: 150, category: 'Travel', date: '2025-03-05' },
    { id: '3', amount: 200, category: 'Business', date: '2025-03-10' },
  ];
};

export const fetchMockCategories = async () => {
  return ['Clothing', 'Travel', 'Business', 'Other'];
};
