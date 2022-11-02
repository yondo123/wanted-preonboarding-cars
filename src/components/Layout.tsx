import { Outlet } from 'react-router-dom';
import Header from './Header';
import Category from './Category';

function Layout(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        <Category />
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
