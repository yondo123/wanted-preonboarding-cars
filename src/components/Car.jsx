import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexbox } from '../styles/mixins/flexbox';
import { getCarFuelInfo, getCarSegmentInfo, getCurrency, getDiffDate } from '../utils';

function Car({ carInfo }) {
  const { attribute, createdAt, amount } = carInfo;
  return (
    <CarItem>
      <Link to="/car" state={{ carInfo }}>
        {getDiffDate(createdAt) <= 1 ? <Noti>신규</Noti> : <></>}
        <CarInfo>
          <CarDetail>
            <Model>
              <p>{attribute.brand}</p>
              <p>{attribute.name}</p>
            </Model>
            <Amount>
              <p>
                {getCarSegmentInfo(attribute.segment).name} / {getCarFuelInfo(attribute.fuelType).name}
              </p>
              <p>월 {getCurrency(amount)} 원 부터</p>
            </Amount>
          </CarDetail>
          <CarImage>
            <img src={attribute.imageUrl} alt="sad" />
          </CarImage>
        </CarInfo>
      </Link>
    </CarItem>
  );
}

export default Car;

const CarItem = styled.li`
  position: relative;
  height: 120px;
  border-bottom: 1px solid ${({ theme }) => theme.black};
`;

const Noti = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  width: 52px;
  height: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary};
  border-radius: 62px;
`;

const CarInfo = styled.div`
  ${flexbox('between', 'start')}
`;

const CarDetail = styled.div`
  margin: 24px 0px 24px 20px;
`;

const Model = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const Amount = styled.div`
  margin-top: 8px;
`;

const CarImage = styled.div`
  margin: 20px 20px 20px 0px;
  width: 152px;
  height: 80px;

  & img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
