import React, { createContext, useMemo, useState } from 'react';

const headerCtx = createContext(false);

function HeaderContext({ children }) {
  const [isBtnDisplay, setBtnDisplay] = useState(false);
  const value = useMemo(() => ({ isBtnDisplay, setBtnDisplay }), [isBtnDisplay]);

  return <headerCtx.Provider value={value}>{children}</headerCtx.Provider>;
}

export { headerCtx, HeaderContext };
