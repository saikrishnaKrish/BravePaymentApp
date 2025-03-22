import React, { createContext, useState, ReactNode } from 'react';

type CategoryContextType = {
  categories: string[];
  addCategory: (category: string) => void;
};

export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<string[]>(['Clothing', 'Travel', 'Business', 'Other']);

  const addCategory = (category: string) => {
    if (!categories.includes(category)) {
      setCategories((prev) => [...prev, category]);
    }
  };

  return (
    <CategoryContext.Provider value={{ categories, addCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
