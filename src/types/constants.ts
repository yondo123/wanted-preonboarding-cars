export enum constatns {
  REUQEST_URL = 'https://preonboarding.platdev.net/api/',
}

export enum segment {
  C = '소형',
}

export const SEGMENT_LIST = [
  {
    name: '전체',
    segment: 'ALL',
  },
  {
    name: '소형',
    segment: 'C',
  },
  {
    name: '중형',
    segment: 'D',
  },
  {
    name: '대형',
    segment: 'E',
  },
  {
    name: 'SUV',
    segment: 'SUV',
  },
];

export const FUEL_LIST = [
  {
    name: '알 수 없음',
    fuel: 'NOT',
  },
  {
    name: '가솔린',
    fuel: 'gasoline',
  },
  {
    name: '전기',
    fuel: 'ev',
  },
  {
    name: '하이브리드',
    fuel: 'hybrid',
  },
];
