import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core';
import { Button } from '@material-ui/core';

import GlobalStyle from './utils/globalStyles';
import DarkMode from './components/DarkMode';

const App = () => (
  <DarkMode>
    <StylesProvider injectFirst>
      <GlobalStyle />
      {/* add components or pages here */}
    </StylesProvider>
  </DarkMode>
);

export default App;
