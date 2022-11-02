import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderContext } from './contexts/HeaderContext';
import Layout from './components/Layout';
import Cars from './pages/Cars';

function App() {
  return (
    <HeaderContext>
      <BrowserRouter>
        <Content>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Cars />} />
            </Route>
          </Routes>
        </Content>
      </BrowserRouter>
    </HeaderContext>
  );
}

const Content = styled.div`
  color: ${({ theme }) => theme.black};
  margin: 0 auto;
  background-color: ${({ theme }) => theme.border};
  min-width: 360px;
  max-width: 450px;
  height: 100vh;
`;

export default App;
