import React, { useState, useCallback } from 'react'
import Dropzone from 'react-dropzone'
import classnames from 'classnames'

import styles from './DropZone.scss'

interface DropZoneProps {
  onDropAccepted<T extends File>(files: T[]): void
  onDropRejected?<T extends File>(files: T[]): void
}

function DropZone({ onDropAccepted, onDropRejected }: DropZoneProps) {
  const [onDrag, setOnDrag] = useState(false)

  const onDragEnter = useCallback(() => {
    setOnDrag(true)
  }, [])

  const onDragLeave = useCallback(() => {
    setOnDrag(false)
  }, [])

  return (
    <Dropzone
      onDropAccepted={onDropAccepted}
      onDropRejected={onDropRejected}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDragLeave}
      multiple={false}
      accept="image/jpeg, image/png"
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div
            {...getRootProps({
              className: classnames(styles.wrapper, {
                [styles.wrapperActive]: onDrag,
              }),
            })}
          >
            <input {...getInputProps()} />
            Drag or click to select image
          </div>
        </section>
      )}
    </Dropzone>
  )
}

export default DropZone
