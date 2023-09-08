import { useState } from "react";

const useArray = (initialArray) => {
  const [array, setArray] = useState(initialArray);

  const addItem = (item) => {
    setArray((prevArray) => [...prevArray, item]);
  };

  const updateItem = (index, newItem) => {
    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = newItem;
      return newArray;
    });
  };

  const removeItem = (index) => {
    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray.splice(index, 1);
      return newArray;
    });
  };

  const clearArray = () => {
    setArray([]);
  };

  return {
    array,
    addItem,
    updateItem,
    removeItem,
    clearArray,
  };
};

export default useArray;
