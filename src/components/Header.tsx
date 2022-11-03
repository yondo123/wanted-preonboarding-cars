import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import BackIcon from './BackIcon';
import { flexbox } from '../styles/mixins/flexbox';
import { posCneterX } from '../styles/mixins/position';
import { headerCtx } from '../contexts/HeaderContext';

function Header(): React.ReactElement {
  const navigate = useNavigate();
  const { isBtnDisplay }: any = useContext(headerCtx);
  const title = isBtnDisplay ? '차량상세' : '전체차량';
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Head>
      <Button className={isBtnDisplay ? '' : 'hide'} onClick={handleClick}>
        <BackIcon size={24} />
      </Button>
      <h1>{title}</h1>
    </Head>
  );
}

export default Header;

const Head = styled.header`
  ${flexbox('start', 'center')};
  height: 60px;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.black};

  & h1 {
    ${posCneterX()}
    font-size: 17px;
    font-weight: 700;
  }
`;

const Button = styled.button`
  margin: 18px 0px 18px 20px;
`;
