import React, { PropsWithChildren } from 'react';

import Header from 'src/components/Header';

const DefaultLayout: React.FC = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DefaultLayout;
