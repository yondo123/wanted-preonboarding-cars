import React, { createContext, useMemo, useState } from 'react';
import { SEGMENT_LIST } from '../types/constants';

const carCtx = createContext(false);

function CarContext({ children }) {
  const [initialCarList, setInitialCarList] = useState([]);
  const [carList, setCarList] = useState([]);
  const [selectedCategory, setSelectCategory] = useState(SEGMENT_LIST[0]);
  const value = useMemo(
    () => ({ selectedCategory, setSelectCategory, carList, setCarList, initialCarList, setInitialCarList }),
    [selectedCategory, carList, initialCarList]
  );

  return <carCtx.Provider value={value}>{children}</carCtx.Provider>;
}

export { carCtx, CarContext };
