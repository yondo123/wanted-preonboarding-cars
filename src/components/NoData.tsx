import styled from 'styled-components';
import { posCenter } from '../styles/mixins/position';

function NoData(): React.ReactElement {
  return (
    <Content>
      <h1>차량이 없습니다..</h1>
    </Content>
  );
}

const Content = styled.section`
  font-size: 17px;
  font-weight: 700;
  ${posCenter()}
`;

export default NoData;
