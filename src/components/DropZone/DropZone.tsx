import React from 'react'
import Dropzone from 'react-dropzone'

import styles from './DropZone.scss'

interface DropZoneProps {
  onDropAccepted<T extends File>(files: T[]): void
  onDropRejected?<T extends File>(files: T[]): void
}

function DropZone({ onDropAccepted, onDropRejected }: DropZoneProps) {
  return (
    <Dropzone
      onDropAccepted={onDropAccepted}
      onDropRejected={onDropRejected}
      multiple={false}
      accept="image/jpeg, image/png"
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div
            {...getRootProps({
              className: styles.wrapper,
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
