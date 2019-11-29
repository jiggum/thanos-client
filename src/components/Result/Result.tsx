import React, { useState, useCallback } from 'react'
import classnames from 'classnames'
import ThanosGlove from 'react-thanos-glove'
import DustEffect from 'react-dust-effect'
import ImageBox from 'components/ImageBox'
import styles from './Result.scss'

interface ResultProps {
  inputImgSrc: string
  backgroundImgSrc: string
  personsImgSrc: string
  pending: boolean
}

const Result = ({ inputImgSrc, backgroundImgSrc, personsImgSrc, pending }: ResultProps) => {
  const [showPersons, setShowPersons] = useState(true)
  const [backgroundLoaded, setBackgroundLoaded] = useState(false)
  const [personsLoaded, setPersonsLoaded] = useState(false)
  const [gloveType, setGloveType] = useState<'snap' | 'time'>('snap')

  const handleGloveAnimationEnd = useCallback(() => {
    setGloveType(gloveType === 'snap' ? 'time' : 'snap')
    setShowPersons(!showPersons)
  }, [gloveType])

  const handleBackgroundLoad = useCallback(() => {
    setBackgroundLoaded(true)
  }, [])

  const handlePersonsLoad = useCallback(() => {
    setPersonsLoaded(true)
  }, [])

  const loded = backgroundLoaded && personsLoaded

  return (
    <div className={styles.wrapper}>
      <ImageBox
        className={classnames(styles.imageBox, {
          [styles.imageBoxTransform]: !loded,
        })}
        pending={pending || !loded}
      >
        {!pending && (
          <>
            <img
              src={backgroundImgSrc}
              role="presentation"
              alt=""
              className={classnames(styles.img, styles.overlapImg)}
              onLoad={handleBackgroundLoad}
            />
            <DustEffect
              src={personsImgSrc}
              show={showPersons}
              className={classnames(styles.img, styles.overlapImg)}
              imgProps={{
                onLoad: handlePersonsLoad,
                className: styles.personImg,
              }}
            />
          </>
        )}
        <img
          src={inputImgSrc}
          role="presentation"
          alt=""
          className={classnames(styles.img, styles.baseImg, {
            [styles.hide]: loded,
          })}
        />
      </ImageBox>
      <ThanosGlove
        className={classnames(styles.glove, {
          [styles.gloveHide]: !loded,
        })}
        size={80}
        type={gloveType}
        onAnimationEnd={handleGloveAnimationEnd}
      />
    </div>
  )
}

export default Result
