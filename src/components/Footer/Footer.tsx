import React from 'react'
import GithubImg from 'assets/images/github_icon.svg'
import styles from './Footer.scss'

const Footer = () => (
  <div className={styles.wrapper}>
    <a href="https://github.com/jiggum/thanos-client">
      <img src={GithubImg} alt="github" className={styles.github} />
    </a>
  </div>
)

export default Footer
