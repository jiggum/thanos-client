import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles'
import { SnackbarProvider } from 'notistack'

import Header from 'components/Header'
import MainBox from 'components/MainBox'
import Footer from 'components/Footer'
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

const snackbarRootStyle = {
  variantError: {
    justifyContent: 'center',
  },
}

interface AppProps {
  classes: any
}

const App = ({ classes }: AppProps) => (
  <ThemeProvider theme={theme}>
    <SnackbarProvider
      hideIconVariant
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      classes={classes}
    >
      <CssBaseline />
      <Container maxWidth="md" className={styles.wrapper}>
        <Header />
        <MainBox />
        <Footer />
      </Container>
    </SnackbarProvider>
  </ThemeProvider>
)

export default withStyles(snackbarRootStyle)(App)
