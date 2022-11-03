import styled from 'styled-components';
import { posCenter } from '../styles/mixins/position';

function Loader(): React.ReactElement {
  return (
    <Content>
      <h1>불러오는 중..</h1>
    </Content>
  );
}

const Content = styled.section`
  font-size: 17px;
  font-weight: 700;
  ${posCenter()}
`;

export default Loader;
