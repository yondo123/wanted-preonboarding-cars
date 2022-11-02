import styled from 'styled-components';

function Category() {
  return (
    <Categories>
      <li>
        <button type="button" className="btn-cate-selected">
          전기
        </button>
      </li>
      <li>
        <button type="button" className="btn-cate">
          전기
        </button>
      </li>
      <li>
        <button type="button" className="btn-cate">
          전기
        </button>
      </li>
      <li>
        <button type="button" className="btn-cate">
          전기
        </button>
      </li>
      <li>
        <button type="button" className="btn-cate">
          전기
        </button>
      </li>
      <li>
        <button type="button" className="btn-cate">
          전기
        </button>
      </li>
      <li>
        <button type="button" className="btn-cate">
          전기
        </button>
      </li>
      <li>
        <button type="button" className="btn-cate">
          전기
        </button>
      </li>
      <li>
        <button type="button" className="btn-cate">
          전기
        </button>
      </li>
      <li>
        <button type="button" className="btn-cate">
          전기
        </button>
      </li>
      <li>
        <button type="button" className="btn-cate">
          전기
        </button>
      </li>
      <li>
        <button type="button" className="btn-cate">
          전기
        </button>
      </li>
    </Categories>
  );
}

export default Category;

const Categories = styled.ul`
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: auto;
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
