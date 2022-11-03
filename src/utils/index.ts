import { SEGMENT_LIST, FUEL_LIST } from '../types/constants';
import { CarBasic, Category, Fuel } from '../types/index';

export const getCarSegmentInfo = (segment: string): Category => {
  const categoryInfo: Category = {
    name: SEGMENT_LIST[0].name,
    segment: SEGMENT_LIST[0].segment,
  };

  SEGMENT_LIST.forEach((item) => {
    if (item.segment === segment) {
      categoryInfo.name = item.name;
      categoryInfo.segment = item.segment;
    }
  });
  return categoryInfo;
};

export const getCarFuelInfo = (fuel: string): Fuel => {
  const fuelInfo: Fuel = {
    name: FUEL_LIST[0].name,
    fuel: FUEL_LIST[0].fuel,
  };

  FUEL_LIST.forEach((item) => {
    if (item.fuel === fuel) {
      fuelInfo.name = item.name;
      fuelInfo.fuel = item.fuel;
    }
  });
  return fuelInfo;
};

export const getDiffDate = (compare: string) => {
  const diff = new Date().getDate() - new Date(compare).getDate();
  return diff;
};

export const getCurrency = (amount: number) =>
  new Intl.NumberFormat('ko-KR', { maximumSignificantDigits: 3 }).format(amount);

export const getCarListBySegment = (segment: string, carList: Array<CarBasic>) =>
  carList.filter((item) => {
    if (segment === 'ALL') {
      return true;
    }
    return item.attribute.segment === segment;
  });
