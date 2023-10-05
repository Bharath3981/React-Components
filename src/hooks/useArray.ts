import { useState } from "react";

const useArray = (initialArray: Array<any>) => {
  const [array, setArray] = useState(initialArray);

  const addItem = (item: any) => {
    setArray((prevArray) => [...prevArray, item]);
  };

  const addUniqueItem = (item: any) => {
    console.log(array);
    if (array.some((value: any) => value === item)) {
      let index = array.findIndex((value: any) => value === item);
      removeItem(index);
    } else {
      addItem(item);
    }
  };

  const updateItem = (index: number, newItem: any) => {
    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = newItem;
      console.log(newArray);
      return newArray;
    });
  };

  const removeItem = (index: number) => {
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
    addUniqueItem,
    updateItem,
    removeItem,
    clearArray,
  };
};

export default useArray;
