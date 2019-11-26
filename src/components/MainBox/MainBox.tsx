import React from 'react'
import axios from 'axios'
import DropZone from 'components/DropZone'
import styles from './MainBox.scss'

const MainBox = () => {
  const requestThanos = (files: File[]) => {
    const formData = new window.FormData()
    formData.append('image', files[0])

    return axios
      .post('http://localhost:5000/thanos', formData)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className={styles.wrapper}>
      <DropZone
        onDropAccepted={files => {
          console.log(files)
          requestThanos(files)
        }}
        onDropRejected={() => {
          console.log('rejected')
        }}
      />
    </div>
  )
}

export default MainBox
