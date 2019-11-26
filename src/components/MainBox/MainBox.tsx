import React, { useState, useCallback } from 'react'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import DropZone from 'components/DropZone'
import ImageBox from 'components/ImageBox'
import styles from './MainBox.scss'

const MainBox = () => {
  const [inputImgSrc, setInputImgSrc] = useState('')
  const [backgroundImgSrc, setBackgroundImgSrc] = useState('')
  const [personsImgSrc, setPersonsImgSrc] = useState('')
  const [pending, setPending] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const loadInputImg = useCallback(image => {
    const reader = new window.FileReader()
    reader.onload = e => {
      setInputImgSrc(e.target!.result as string)
    }
    reader.readAsDataURL(image)
  }, [])

  const onDropAccepted = useCallback(
    (files: File[]) => {
      const image = files[0]
      loadInputImg(image)
      const formData = new window.FormData()
      formData.append('image', image)
      setPending(true)
      axios
        .post('http://localhost:5000/thanos', formData)
        .then(res => {
          const {
            data: { background, persons },
          } = res
          setBackgroundImgSrc(background)
          setPersonsImgSrc(persons)
          setPending(false)
        })
        .catch(err => {
          enqueueSnackbar(err, {
            variant: 'error',
          })
          setPending(false)
        })
    },
    [loadInputImg],
  )

  const onDropRejected = useCallback(files => {
    enqueueSnackbar(`Invalid file format: "${files[0].type}"`, {
      variant: 'error',
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      {inputImgSrc ? (
        <ImageBox
          inputImgSrc={inputImgSrc}
          backgroundImgSrc={backgroundImgSrc}
          personsImgSrc={personsImgSrc}
          pending={pending}
        />
      ) : (
        <DropZone onDropAccepted={onDropAccepted} onDropRejected={onDropRejected} />
      )}
    </div>
  )
}

export default MainBox
