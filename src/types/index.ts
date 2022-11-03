export type Api = {
  payload: Array<CarBasic>;
};

export type CarBasic = {
  readonly insurance?: CarInsurance;
  readonly additionalProducts?: CarAdditionalProducts;
  readonly id: string;
  attribute: CarAttributes;
  amount: number;
  startDate: Date;
  createdAt: Date;
};

export type Category = {
  name: string;
  segment: string;
};

export type Fuel = {
  name: string;
  fuel: string;
};

export type CarInsurance = {
  readonly name: string;
  readonly description: string;
};

export type CarAdditionalProducts = {
  readonly name: string;
  readonly amount: number;
};

export type CarAttributes = {
  readonly segment: CarSegmentType;
  readonly fuelType: CarFuelType;
  readonly brand: string;
  readonly name: string;
  readonly imageUrl: string;
};

export type CarSegmentType = 'C' | 'D' | 'E' | 'SUV';
export type CarFuelType = 'gasoline' | 'ev' | 'hybrid';
