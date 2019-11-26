import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { SnackbarProvider } from 'notistack'

import Header from 'components/Header'
import MainBox from 'components/MainBox'
import styles from './App.scss'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#d543d5',
      main: '#929',
      dark: '#7d1c7d',
    },
    background: {
      default: '#fff',
    },
  },
})

const App = () => (
  <ThemeProvider theme={theme}>
    <SnackbarProvider
      hideIconVariant
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <CssBaseline />
      <Container maxWidth="md" className={styles.wrapper}>
        <Header />
        <MainBox />
      </Container>
    </SnackbarProvider>
  </ThemeProvider>
)

export default App
