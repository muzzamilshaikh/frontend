import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { AppBar, CssBaseline, Typography, createMuiTheme, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { toggleDarkMode } from '@frontend/shared/redux/darkModeSlice';

type Props = {
  children?: React.ReactNode;
};

const DarkMode = ({ children }: Props) => {
  const toggleDark = useSelector((state: any) => state.darkMode.toggleDark);
  const dispatch = useDispatch();
  const theme = createMuiTheme({
    palette: {
      type: toggleDark ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default DarkMode;
