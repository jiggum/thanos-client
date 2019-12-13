import React, { useState, useCallback } from 'react'
import classnames from 'classnames'
import ThanosGlove from 'react-thanos-glove'
import DustEffect from 'react-dust-effect'
import ImageBox from 'components/ImageBox'
import styles from './Result.scss'

interface ResultProps {
  inputImgSrc: string
  backgroundImgSrc: string
  persons1ImgSrc: string
  persons2ImgSrc: string
  pending: boolean
}

const Result = ({
  inputImgSrc,
  backgroundImgSrc,
  persons1ImgSrc,
  persons2ImgSrc,
  pending,
}: ResultProps) => {
  const [showPersons1, setShowPersons1] = useState(true)
  const [showPersons2, setShowPersons2] = useState(true)
  const [backgroundLoaded, setBackgroundLoaded] = useState(false)
  const [persons1Loaded, setPersons1Loaded] = useState(false)
  const [persons2Loaded, setPersons2Loaded] = useState(false)
  const [gloveType, setGloveType] = useState<'snap' | 'time'>('snap')

  const handleGloveAnimationEnd = useCallback(() => {
    if (persons1ImgSrc && persons2ImgSrc) {
      if (showPersons1) {
        setShowPersons1(false)
        setGloveType('snap')
      } else if (showPersons2) {
        setShowPersons2(false)
        setGloveType('time')
      } else {
        setShowPersons1(true)
        setShowPersons2(true)
        setGloveType('snap')
      }
    } else {
      setGloveType(gloveType === 'snap' ? 'time' : 'snap')
      setShowPersons1(!showPersons1)
    }
  }, [persons1ImgSrc, persons2ImgSrc, showPersons1, showPersons2, gloveType])

  const handleBackgroundLoad = useCallback(() => {
    setBackgroundLoaded(true)
  }, [])

  const handlePersons1Load = useCallback(() => {
    setPersons1Loaded(true)
  }, [])

  const handlePersons2Load = useCallback(() => {
    setPersons2Loaded(true)
  }, [])

  const loded = backgroundLoaded && persons1Loaded && (!persons2ImgSrc || persons2Loaded)

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
              className={classnames(styles.img, styles.overlapImg, styles.backgroundImg)}
              onLoad={handleBackgroundLoad}
            />
            {persons2ImgSrc && (
              <DustEffect
                src={persons2ImgSrc}
                show={showPersons2}
                className={classnames(styles.img, styles.overlapImg, styles.personContainer)}
                option={{
                  blur: 0.5,
                }}
                imgProps={{
                  onLoad: handlePersons2Load,
                  className: styles.personImg,
                }}
              />
            )}
            <DustEffect
              src={persons1ImgSrc}
              show={showPersons1}
              className={classnames(styles.img, styles.overlapImg, styles.personContainer)}
              option={{
                blur: 0.5,
              }}
              imgProps={{
                onLoad: handlePersons1Load,
                className: styles.personImg,
              }}
            />
          </>
        )}
        <img
          src={loded ? backgroundImgSrc : inputImgSrc}
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
