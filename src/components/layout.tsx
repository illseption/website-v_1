import * as React from 'react';
import SideBar from './sideBar';

interface layoutProps {
  children: React.ReactNode;
};

const Layout = ({children}: layoutProps) => {
  return (
    <main>
      <SideBar />
      <div className="content">
        {children}
      </div>
    </main>
  )
};

export default Layout;