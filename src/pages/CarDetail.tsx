import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { headerCtx } from '../contexts/HeaderContext';
import { CarAdditionalProducts, CarInsurance } from '../types';
import { getCarFuelInfo, getCarSegmentInfo, getCurrency } from '../utils';

function CarDetail(): React.ReactElement {
  const { carInfo } = useLocation().state;
  const { attribute, startDate, amount, insurance, additionalProducts } = carInfo;
  console.log(JSON.stringify(carInfo));

  const { setBtnDisplay }: any = useContext(headerCtx);
  useEffect(() => {
    setBtnDisplay(true);
  }, []);

  return (
    <Detail>
      <Image>
        <img src="https://interview.platdev.net/avantecn7.png" alt="" />
      </Image>
      <section>
        <Brand>
          <p className="company">{attribute.brand}</p>
          <p className="name">{attribute.name}</p>
        </Brand>
        <Amount className="bar">
          <p>월 {getCurrency(amount)} 원</p>
        </Amount>
      </section>
      <Banner className="bar">차량정보</Banner>
      <Content>
        <div className="row">
          <p className="left">차종</p>
          <p className="right">{getCarSegmentInfo(attribute.segment).name}</p>
        </div>
        <div className="row">
          <p className="left">연료</p>
          <p className="right">{getCarFuelInfo(attribute.fultType).name}</p>
        </div>
        <div className="row">
          <p className="left">이용 가능일</p>
          <p className="right">{startDate}</p>
        </div>
      </Content>
      <Banner>보험</Banner>
      <Content>
        {insurance.map((item: CarInsurance, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="row" key={index}>
            <p className="left">{item.name}</p>
            <p className="right">{item.description}</p>
          </div>
        ))}
      </Content>
      <Banner>추가상품</Banner>
      <Content>
        {additionalProducts.map((item: CarAdditionalProducts, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="row" key={index}>
            <p className="left">{item.name}</p>
            <p className="right">월 {getCurrency(item.amount)} 원</p>
          </div>
        ))}
      </Content>
    </Detail>
  );
}

export default CarDetail;

const Detail = styled.article`
  color: ${({ theme }) => theme.black};
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  width: 390px 205px;
  & img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const Banner = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  background-color: ${({ theme }) => theme.primary};
  padding: 14px 0px 14px 20px;
`;

const Brand = styled.div`
  padding: 10px 0 10px 20px;
  text-align: left;

  & .company {
    font-size: 20px;
    font-weight: 700;
  }

  & .name {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Amount = styled.div`
  font-size: 17px;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  padding: 14px 20px 14px 0;
`;

const Content = styled.div`
  & .row {
    display: flex;
    justify-content: space-between;
  }

  & .left {
    padding: 13px 0px 14px 19px;
    font-weight: 700;
  }

  & .right {
    padding: 13px 21px 14px 0px;
  }
`;
