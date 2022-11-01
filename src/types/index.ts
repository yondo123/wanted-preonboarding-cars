export enum apiInfo {
  REUQEST_URL = 'https://preonboarding.platdev.net/api/',
}

export type CarBasic = {
  readonly id: string;
  readonly insurance?: CarInsurance;
  readonly additionalProducts?: CarAdditionalProducts;
  amount: number;
  startDate: Date;
  createdAt: Date;
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
  readonly brand: string;
  readonly name: string;
  readonly segment: CarSegmentType;
  readonly fuelType: CarFuelType;
  readonly imageUrl: string;
};

export type CarSegmentType = 'C' | 'D' | 'E' | 'SUV';
export type CarFuelType = 'gasoline' | 'ev' | 'hybrid';
