import React, { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  // value값이 들어오고 delay설정한 시간만큼뒤에 debounceValue 리턴함
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(debounceHandler);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
