import React, { useContext } from 'react';
import styled from 'styled-components';
import { carCtx } from '../contexts/CarContext';
import { getCarSegmentInfo, getCarListBySegment } from '../utils';
import { SEGMENT_LIST } from '../types/constants';

function Category() {
  const { selectedCategory, setSelectCategory, setCarList, initialCarList } = useContext(carCtx);

  const handleClick = (segment) => () => {
    setSelectCategory(getCarSegmentInfo(segment));
    setCarList(() => getCarListBySegment(segment, initialCarList));
  };
  return (
    <Categories>
      {SEGMENT_LIST.map((item) => (
        <li key={item.segment}>
          <button
            onClick={handleClick(item.segment)}
            type="button"
            disabled={selectedCategory.segment === item.segment}
            className={selectedCategory.segment === item.segment ? 'btn-cate-selected' : 'btn-cate'}>
            {item.name}
          </button>
        </li>
      ))}
    </Categories>
  );
}

export default React.memo(Category);

const Categories = styled.ul`
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: scroll;
  overflow-y: scroll;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.black};
  padding: 0 8px;

  &::-webkit-scrollbar {
    display: none;
  }

  & li {
    padding: 6px 0;
    margin-left: 8px;
  }

  & button.btn-cate-selected {
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
    min-width: 64px;
    font-size: 14px;
    font-weight: 700;
    height: 27px;
    padding: 5px 18px;
    border-radius: 62px;
  }

  & button.btn-cate {
    background-color: ${({ theme }) => theme.secondary};
    font-size: 14px;
    font-weight: 700;
    min-width: 64px;
    height: 27px;
    padding: 5px 18px;
    border-radius: 62px;
  }
`;
