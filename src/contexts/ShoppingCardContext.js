import React from "react";
import { useState } from "react";

export const ShoppingCardContext = React.createContext();
export const ShoppingCardToggleContext = React.createContext();

export function ShoppingCardProvider({ children }) {
  const [items, setItems] = useState([]);
  const toggleItem = (item) => {
    if (items.includes(item)) {
      setItems(items.filter((i) => i != item));
    } else {
      setItems([...items, item]);
    }
  };
  return (
    <ShoppingCardContext.Provider value={items}>
      <ShoppingCardToggleContext.Provider value={toggleItem}>
        {children}
      </ShoppingCardToggleContext.Provider>
    </ShoppingCardContext.Provider>
  );
}
