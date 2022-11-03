import React, { useContext, useEffect } from 'react';
import cars from '../api/cars';
import Car from '../components/Car';
import { carCtx } from '../contexts/CarContext';
import { headerCtx } from '../contexts/HeaderContext';
import Category from '../components/Category';
import Loader from '../components/Loader';
import NoData from '../components/NoData';
import useFetch from '../hooks/useFetch';
import { CarBasic } from '../types';
import { getCarListBySegment } from '../utils';

function Cars(): React.ReactElement {
  const { isLoading, data } = useFetch(cars.getCars);
  const { selectedCategory, carList, setCarList, initialCarList, setInitialCarList }: any = useContext(carCtx);
  const { setBtnDisplay }: any = useContext(headerCtx);

  useEffect(() => {
    setBtnDisplay(false);
    setCarList(() => getCarListBySegment(selectedCategory.segment, initialCarList));
    if (!initialCarList.length) setInitialCarList(data);
  }, [isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Category />
      {!carList.length ? (
        <NoData />
      ) : (
        <ul>
          {carList.map((item: { id: React.Key | null | undefined; carInfo: CarBasic }) => (
            <Car key={item.id} carInfo={item} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Cars;
