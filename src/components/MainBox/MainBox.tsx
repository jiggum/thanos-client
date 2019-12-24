import React, { useState, useCallback } from 'react'
import axios from 'axios'
import Resizer from 'react-image-file-resizer'
import { useSnackbar } from 'notistack'
import { getUrlWithTimeStamp } from 'utils'
import DropZone from 'components/DropZone'
import Result from 'components/Result'
import sampleImgPaths from 'constants/sampleImgPaths'
import styles from './MainBox.scss'

const USE_SAMPLE = true

const sampleImgPath = sampleImgPaths[Math.floor(Math.random() * sampleImgPaths.length)]

const MainBox = () => {
  const [inputImgSrc, setInputImgSrc] = useState(USE_SAMPLE ? sampleImgPath.input : '')
  const [backgroundImgSrc, setBackgroundImgSrc] = useState(
    USE_SAMPLE ? sampleImgPath.background : '',
  )
  const [persons1ImgSrc, setPersons1ImgSrc] = useState(USE_SAMPLE ? sampleImgPath.person1 : '')
  const [persons2ImgSrc, setPersons2ImgSrc] = useState(USE_SAMPLE ? sampleImgPath.person2 : '')
  const [pending, setPending] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const requestConvert = useCallback(image => {
    const formData = new window.FormData()
    formData.append('image', image)
    setPending(true)
    axios
      .post('https://api.thanossnap.org/thanos', formData)
      .then((res: any) => {
        const {
          data: { code, data, message },
        } = res
        if (code === 'ok') {
          const { background, persons1, persons2 } = data
          setBackgroundImgSrc(background)
          if (persons1) setPersons1ImgSrc(persons1)
          if (persons2) setPersons2ImgSrc(persons2)
        }
        if (code === 'error') {
          enqueueSnackbar(message as string, {
            variant: 'error',
          })
          setInputImgSrc('')
        }
        setPending(false)
      })
      .catch(err => {
        enqueueSnackbar('Something was wrong! Try again', {
          variant: 'error',
        })
        setPending(false)
        setInputImgSrc('')
        // eslint-disable-next-line no-console
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
          persons1ImgSrc={getUrlWithTimeStamp(persons1ImgSrc)}
          persons2ImgSrc={getUrlWithTimeStamp(persons2ImgSrc)}
          pending={pending}
        />
      ) : (
        <DropZone onDropAccepted={onDropAccepted} onDropRejected={onDropRejected} />
      )}
    </div>
  )
}

export default MainBox
