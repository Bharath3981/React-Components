import { useState } from "react";

const useObject = (initialObject = {}) => {
  const [object, setObject] = useState(initialObject);

  // Function to clone an object
  const cloneObject = (obj) => {
    return { ...obj };
  };

  // Function to merge two objects
  const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  };

  // Function to update a property in the object
  const updateProperty = (key, value) => {
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

export default useObjectOperations;
