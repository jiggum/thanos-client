import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Result from 'components/Result'
import styles from './ImageBox.scss'

interface ImageBoxProps {
  inputImgSrc: string
  backgroundImgSrc: string
  personsImgSrc: string
  pending: boolean
}

const ImageBox = ({ inputImgSrc, backgroundImgSrc, personsImgSrc, pending }: ImageBoxProps) => (
  <div className={styles.wrapper}>
    {pending ? (
      <>
        <div className={styles.input}>
          <img src={inputImgSrc} role="presentation" alt="" className={styles.inputImg} />
        </div>
        <div className={styles.progress}>
          <CircularProgress />
        </div>
      </>
    ) : (
      <Result backgroundImgSrc={backgroundImgSrc} personsImgSrc={personsImgSrc} />
    )}
  </div>
)

export default ImageBox
