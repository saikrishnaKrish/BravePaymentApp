import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

interface CategorySelectorProps {
  selectedCategory: string;
  categories: string[];
  onCategoryChange: (newCategory: string) => void;
  onAddCategory: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategory,
  onCategoryChange,
  categories,
  onAddCategory,
}) => {
  const [newCategory, setNewCategory] = useState('');

  
  const handleAddCategory = () => {
    if (newCategory.trim() !== '' && !categories.includes(newCategory)) {
      onAddCategory(newCategory);
      setNewCategory('');
    }
  };
  return (
    <View>
      <Text>Select Category</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text 
            style={item === selectedCategory ? styles.selectedCategory : styles.category}
            onPress={() => onCategoryChange(item)}
          >
            {item}
          </Text>
        )}
      />
      <TextInput
        placeholder="Add new category"
        value={newCategory}
        onChangeText={setNewCategory}
        style={styles.input}
      />
      <Button title="Add Category" onPress={() => {
        if (newCategory.trim()) {
          onAddCategory(newCategory);
          setNewCategory('');
        }
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    padding: 8,
    fontSize: 16,
    color: 'blue',
  },
  selectedCategory: {
    padding: 8,
    fontSize: 16,
    color: 'white',
    backgroundColor: 'blue',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
  },
});

export default CategorySelector;
