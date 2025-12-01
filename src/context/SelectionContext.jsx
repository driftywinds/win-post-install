import { createContext, useContext, useState, useEffect } from 'react';
import { softwareCatalog } from '../data/software-catalog';

const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  // State
  const [selectedSoftware, setSelectedSoftware] = useState([]);
  const [selectedConfigs, setSelectedConfigs] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('win-installer-selections');
      if (saved) {
        const data = JSON.parse(saved);
        setSelectedSoftware(data.software || []);
        setSelectedConfigs(data.configs || []);
      }
    } catch (error) {
      console.error('Error loading selections from localStorage:', error);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(
        'win-installer-selections',
        JSON.stringify({
          software: selectedSoftware,
          configs: selectedConfigs,
        })
      );
    } catch (error) {
      console.error('Error saving selections to localStorage:', error);
    }
  }, [selectedSoftware, selectedConfigs]);

  // Toggle single software
  const toggleSoftware = (id) => {
    setSelectedSoftware((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  // Toggle single configuration
  const toggleConfig = (id) => {
    setSelectedConfigs((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  // Select all software in a category
  const selectAllInCategory = (categoryId) => {
    const categoryItems = softwareCatalog
      .filter((s) => s.category === categoryId)
      .map((s) => s.id);
    setSelectedSoftware((prev) => [...new Set([...prev, ...categoryItems])]);
  };

  // Deselect all software in a category
  const deselectAllInCategory = (categoryId) => {
    const categoryItems = softwareCatalog
      .filter((s) => s.category === categoryId)
      .map((s) => s.id);
    setSelectedSoftware((prev) =>
      prev.filter((id) => !categoryItems.includes(id))
    );
  };

  // Check if all items in category are selected
  const isAllCategorySelected = (categoryId) => {
    const categoryItems = softwareCatalog
      .filter((s) => s.category === categoryId)
      .map((s) => s.id);
    return categoryItems.every((id) => selectedSoftware.includes(id));
  };

  // Clear all selections
  const clearAll = () => {
    setSelectedSoftware([]);
    setSelectedConfigs([]);
  };

  // Clear only software
  const clearSoftware = () => {
    setSelectedSoftware([]);
  };

  // Clear only configs
  const clearConfigs = () => {
    setSelectedConfigs([]);
  };

  const value = {
    selectedSoftware,
    selectedConfigs,
    toggleSoftware,
    toggleConfig,
    selectAllInCategory,
    deselectAllInCategory,
    isAllCategorySelected,
    clearAll,
    clearSoftware,
    clearConfigs,
  };

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
};

// Custom hook to use the selection context
export const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error('useSelection must be used within SelectionProvider');
  }
  return context;
};
