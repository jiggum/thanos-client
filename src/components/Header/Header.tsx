import React from 'react'
import LogoImg from 'assets/images/logo.png'
import styles from './Header.scss'

const Header = () => (
  <div className={styles.wrapper}>
    <img src={LogoImg} alt="logo" className={styles.logo} />
  </div>
)

export default Header
