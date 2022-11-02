import styled from 'styled-components';
import { flexbox } from '../styles/mixins/flexbox';

function Car() {
  return (
    <CarItem>
      <Noti>신규</Noti>
      <CarInfo>
        <CarDetail>
          <Model>
            <p>기아</p>
            <p>EV6</p>
          </Model>
          <Amount>
            <p>중형 / 전기</p>
            <p>월 600,000 원 부터</p>
          </Amount>
        </CarDetail>
        <CarImage>
          <img src="https://interview.platdev.net/avantecn7.png" alt="" />
        </CarImage>
      </CarInfo>
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

// <li class="car-item">
//     <div class="noti">신규</div>
//     <div class="car-info">
//         <div class="car-detail">
//             <div class="car-brand">
//                 <p>기아</p>
//                 <p>EV6</p>
//             </div>
//             <div class="car-amount">
//                 <p>중형 / 전기</p>
//                 <p>월 600,000 원 부터</p>
//             </div>
//         </div>
//         <div class="car-image">
//             <img src="https://interview.platdev.net/avantecn7.png" alt="">
//         </div>
//     </div>
// </li>
