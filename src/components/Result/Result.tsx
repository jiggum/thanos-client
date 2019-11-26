import React from 'react'

import styles from './Result.scss'

interface ImageBoxProps {
  backgroundImgSrc: string
  personsImgSrc: string
}

const Result = ({ backgroundImgSrc, personsImgSrc }: ImageBoxProps) => (
  <div className={styles.wrapper}>
    <img src={backgroundImgSrc} role="presentation" alt="" className={styles.backgroundImg} />
    <img src={personsImgSrc} role="presentation" alt="" className={styles.personsImg} />
  </div>
)

export default Result
