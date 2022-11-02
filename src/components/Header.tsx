import styled from 'styled-components';
import { useContext } from 'react';
import BackIcon from './BackIcon';
import { flexbox } from '../styles/mixins/flexbox';
import { posCneterX } from '../styles/mixins/position';
import { headerCtx } from '../contexts/HeaderContext';

function Header(): React.ReactElement {
  const isBtnDisplay = useContext(headerCtx);
  const title = isBtnDisplay ? '전체차량' : '차량상세';

  return (
    <Head>
      {isBtnDisplay ? (
        <Button>
          <BackIcon size={24} />
        </Button>
      ) : (
        <></>
      )}
      <h1>{title}</h1>
    </Head>
  );
}

export default Header;

const Head = styled.header`
  ${flexbox('start', 'center')};
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.black};

  & h1 {
    font-size: 17px;
    font-weight: 700;
    ${posCneterX()}
  }
`;

const Button = styled.button`
  margin: 18px 0px 18px 20px;
`;
