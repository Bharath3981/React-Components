import { useState } from "react";

const useObject = (initialObject = {}) => {
  const [object, setObject] = useState(initialObject);

  // Function to clone an object
  const cloneObject = (obj: any) => {
    return { ...obj };
  };

  // Function to merge two objects
  const mergeObjects = (obj1: any, obj2: any) => {
    return { ...obj1, ...obj2 };
  };

  // Function to update a property in the object
  const updateProperty = (key: number, value: any) => {
    setObject((prevObject) => ({
      ...prevObject,
      [key]: value,
    }));
  };

  return {
    object,
    cloneObject,
    mergeObjects,
    updateProperty,
  };
};

export default useObject;
