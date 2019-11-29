import React from 'react'
import classnames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './ImageBox.scss'

interface ImageBoxProps {
  className?: string
  children?: React.ReactNode
  pending?: boolean
}

const ImageBox = ({ className, children, pending }: ImageBoxProps) => (
  <div className={classnames(styles.wrapper, className)}>
    {children}
    {pending && (
      <div className={styles.progress}>
        <CircularProgress />
      </div>
    )}
  </div>
)

export default ImageBox
