import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
