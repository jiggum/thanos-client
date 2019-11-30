import React, { useState, useCallback } from 'react'
import axios from 'axios'
import Resizer from 'react-image-file-resizer'
import { useSnackbar } from 'notistack'
import { getUrlWithTimeStamp } from 'utils'
import DropZone from 'components/DropZone'
import Result from 'components/Result'
import styles from './MainBox.scss'

const MainBox = () => {
  const [inputImgSrc, setInputImgSrc] = useState('')
  const [backgroundImgSrc, setBackgroundImgSrc] = useState('')
  const [personsImgSrc, setPersonsImgSrc] = useState('')
  const [pending, setPending] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const requestConvert = useCallback(image => {
    const formData = new window.FormData()
    formData.append('image', image)
    setPending(true)
    axios
      .post('http://api.thanossnap.org/thanos', formData)
      .then(res => {
        const {
          data: { background, persons },
        } = res
        setBackgroundImgSrc(background)
        setPersonsImgSrc(persons)
        setPending(false)
      })
      .catch(err => {
        enqueueSnackbar('Something was wrong! Try again', {
          variant: 'error',
        })
        setPending(false)
        console.error(err)
      })
  }, [])

  const onDropAccepted = useCallback(
    (files: File[]) => {
      const image = files[0]
      const reader = new window.FileReader()
      reader.onload = e => {
        setInputImgSrc(e.target!.result as string)
      }
      reader.readAsDataURL(image)
      Resizer.imageFileResizer(image, 900, 504, 'PNG', 100, 0, requestConvert, 'blob')
    },
    [requestConvert],
  )

  const onDropRejected = useCallback(files => {
    enqueueSnackbar(`Invalid file format: "${files[0].type}"`, {
      variant: 'error',
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      {inputImgSrc ? (
        <Result
          inputImgSrc={inputImgSrc}
          backgroundImgSrc={getUrlWithTimeStamp(backgroundImgSrc)}
          personsImgSrc={getUrlWithTimeStamp(personsImgSrc)}
          pending={pending}
        />
      ) : (
        <DropZone onDropAccepted={onDropAccepted} onDropRejected={onDropRejected} />
      )}
    </div>
  )
}

export default MainBox
